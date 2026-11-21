---
title: "ローコードフルスタック API & UI 生成器"
description: "データベーステーブルのメタデータに基づき、Spring Boot 4.0 バックエンドコードおよび Vben Admin 標準コンポーネント（BasicTable、BasicModal、BasicForm）ベースの Vue 3 フロントエンド管理画面 UI コードを生成します。"
sort: 4
---

# ローコードフルスタック API & UI 生成器

SyncBoot のコード生成モジュールは、データベーステーブル構造を分析し、**Spring Boot 4.0 バックエンド API（`/api/v1/boot/...`）および Vben Admin 高水準標準コンポーネント（`BasicTable`、`BasicModal`、`BasicForm`）ベースの Vue 3 フロントエンド管理画面**のソースコードを生成します。

---

## 生成アーティファクトの構成

テーブルを選択してコード生成を実行すると、以下の構成要素が生成されます。

```
生成されるアーティファクト構成
├── Backend (Java / Spring Boot 4.0)
│   ├── SubscriptionController.java     # REST API エンドポイント (/api/v1/boot/subscriptions) & OpenAPI 設定
│   ├── SubscriptionService.java        # ビジネスロジックインターフェース
│   ├── SubscriptionServiceImpl.java    # トランザクションサービス実装クラス
│   ├── SubscriptionMapper.java         # MyBatis-Plus Mapper インターフェース
│   ├── SubscriptionMapper.xml          # XML マッパークエリファイル
│   ├── SubscriptionEntity.java         # テーブルマッピングエンティティクラス
│   └── SubscriptionDTO.java            # リクエストおよびレスポンス DTO クラス
│
└── Frontend (Vue 3 / TypeScript / Vben Admin)
    ├── index.vue                       # PageWrapper & BasicTable ベースの一覧画面
    ├── subscription.data.ts            # BasicColumn[] および FormSchema[] スキーマ分離定義
    ├── components/
    │   └── SubscriptionModal.vue       # BasicModal & BasicForm 独立分離型の登録・編集モーダル
    └── subscription.api.ts             # defHttp ベースの /api/v1/boot/subscriptions API 通信モジュール
```

---

## 主な機能

1. **Vben 標準コンポーネントおよびスキーマ分離**: `BasicTable`（`useTable`）、`BasicModal`（`useModalInner`）、`BasicForm`（`useForm`）および `*.data.ts` の `FormSchema[]` を使用し、一貫性のあるエンタープライズレイアウトを生成します。
2. **二重バリデーション**: フロントエンド（`FormSchema` Rules）とバックエンド（Jakarta Bean Validation）に同一の検証ルールを適用します。
3. **Excel 入出力テンプレート**: EasyExcel ライブラリをベースに、大容量データの Excel ダウンロードおよびアップロードコードを標準提供します。
4. **OpenAPI 3.0 連携**: 生成された REST API に Swagger アノテーションが付与されており、`/swagger-ui/index.html` からテストできます。

---

## バックエンド Controller の例

```java
@Tag(name = "Subscription Management", description = "定期課金サブスクリプション管理 API")
@RestController
@RequestMapping("/api/v1/boot/subscriptions")
@RequiredArgsConstructor
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    @Operation(summary = "サブスクリプション一覧のページング取得")
    @GetMapping
    @PreAuthorize("hasAuthority('subscription:query')")
    public Result<IPage<SubscriptionDTO>> getPage(
            @ParameterObject SubscriptionQueryDTO query,
            @ParameterObject PageParam pageParam) {
        return Result.ok(subscriptionService.queryPage(query, pageParam));
    }

    @Operation(summary = "新規サブスクリプション登録")
    @PostMapping
    @PreAuthorize("hasAuthority('subscription:create')")
    public Result<Long> create(@Valid @RequestBody SubscriptionCreateDTO dto) {
        return Result.ok(subscriptionService.createSubscription(dto));
    }
}
```
