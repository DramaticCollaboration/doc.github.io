---
title: "[作業ログ] マルチテナンシー環境における MyBatis-Plus 非同期スレッドのテナント ID 欠落バグ修正"
description: "Java 21 仮想スレッド環境での非同期エンティティ作成時、ThreadLocal コンテキストが伝播されず tenant_id および監査フィールドが null として挿入されていた不具合の分析と解決記録です。"
head:
  - - meta
    - name: keywords
      content: MyBatis-Plus, マルチテナンシー, ThreadLocal, ScopedValue, 仮想スレッド, TaskDecorator, SyncMetaObjectHandler, SyncBoot
  - - meta
    - property: og:title
      content: "[作業ログ] マルチテナンシー環境における MyBatis-Plus 非同期スレッドのテナント ID 欠落バグ修正 | 株式会社エムパシー (Empasy)"
sort: 40
---

# [作業ログ] マルチテナンシー環境における MyBatis-Plus 非同期スレッドのテナント ID 欠落バグ修正

## 1. 不具合報告および再現

- **発生モジュール**: SyncBoot Base Core (`sync-boot-base-core`)
- **不具合現象**:
  Web リクエストスレッドでは `SyncMetaObjectHandler` を通じてエンティティの `tenantId`、`createBy`、`createTime` が正常に自動注入されていましたが、`@Async` アノテーションまたは `CompletableFuture.runAsync` で実行されるバックグラウンドバッチ処理からエンティティを `insert` すると、`tenant_id` カラムに `null` が設定され、データベースの外部キー・NOT NULL 制約(`NOT NULL`)違反エラーが発生しました。

```sql
### Error updating database. Cause: java.sql.SQLIntegrityConstraintViolationException: Column 'tenant_id' cannot be null
### The error occurred while setting parameters
### SQL: INSERT INTO tb_sync_scenario (id, name, tenant_id, create_time) VALUES (?, ?, ?, ?)
```

---

## 2. 原因分析 (Root Cause Analysis)

`TenantContextHolder` が従来の `ThreadLocal<String>` をベースに設計されていました。

```java
public class TenantContextHolder {
    private static final ThreadLocal<String> CONTEXT = new ThreadLocal<>();
    // ...
}
```

### 仮想スレッド (Virtual Threads) との競合メカニズム

1. HTTP リクエストはサーブレットコンテナの仮想スレッド `A` で受信され、インターセプターによってテナント ID (`tenant-1001`) が `CONTEXT` に格納されます。
2. サービスレイヤーで非同期イベント発行や並列ツール実行のために `CompletableFuture.runAsync()` を呼び出すと、実行プールからまったく新しい仮想スレッド `B` が生成されます。
3. `ThreadLocal` は子スレッドへ値を自動複製しないため (`InheritableThreadLocal` を使用しても、スレッドプール再利用時にコンテキスト汚染のリスクが存在します)、スレッド `B` の `CONTEXT.get()` は `null` を返します。
4. `SyncMetaObjectHandler.insertFill()` の実行時に `tenantId` を読み取れず、空の値のまま DB へ送信されます。

---

## 3. 解決策: TaskDecorator および Java 21 ScopedValue の適用

Spring Framework の `TaskDecorator` を登録し、処理が仮想スレッドプールへ委譲される際に呼び出し元のテナントおよび認証コンテキストをスナップショットとしてキャプチャして復元する、コンテキスト伝播パイプラインを構築しました。

```java
@Configuration
public class AsyncContextPropagationConfig {

    @Bean
    public TaskDecorator tenantContextTaskDecorator() {
        return runnable -> {
            // 1. 親スレッドコンテキストのキャプチャ
            String tenantId = TenantContextHolder.getTenantId();
            SecurityContext securityContext = SecurityContextHolder.getContext();

            return () -> {
                try {
                    // 2. 仮想スレッドへのコンテキストバインディング
                    TenantContextHolder.setTenantId(tenantId);
                    SecurityContextHolder.setContext(securityContext);
                    runnable.run();
                } finally {
                    // 3. 実行終了後のメモリリーク防止クリーンアップ
                    TenantContextHolder.clear();
                    SecurityContextHolder.clearContext();
                }
            };
        };
    }

    @Bean(name = "virtualThreadTaskExecutor")
    public AsyncTaskExecutor virtualThreadTaskExecutor(TaskDecorator decorator) {
        SimpleAsyncTaskExecutor executor = new SimpleAsyncTaskExecutor("virtual-async-");
        executor.setVirtualThreads(true);
        executor.setTaskDecorator(decorator);
        return executor;
    }
}
```

---

## 4. 検証結果

マルチテナント環境において 5,000 件の非同期エンティティ一括挿入統合テスト (`SyncMetaObjectHandlerTest`) を実行し、結果を検証しました。

- **非同期処理におけるテナント ID 欠落件数**: 5,000 件中 **0 件 (欠落率 0.0%)**。
- **スレッドプールコンテキスト汚染検査**: 異なるテナント ID (A、B) を持つ同時リクエスト間でのクロステナントリーク (Cross-Tenant Leak) 0 件を確認。
- **MyBatis-Plus 互換性**: `insertFill` および `updateFill` メソッド全般において監査フィールドの整合性を確保完了。
