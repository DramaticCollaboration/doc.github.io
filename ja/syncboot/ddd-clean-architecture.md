---
title: SyncBoot DDD & Clean Architecture 標準
shortTitle: DDD & クリーンアーキテクチャ
category: アーキテクチャ・パターン
sort: 7
description: ドメイン駆動設計（DDD）、4 層分離、Mandatory Lombok ルール、および Zero-Mock 品質原則
---

# SyncBoot DDD & Clean Architecture 標準

## 1. 4 層 Clean Architecture パッケージ構造

SyncBoot で生成または運用されるすべてのマイクロサービスバックエンドは、レイヤー間の単方向依存性を保証するために、次の 4 層構造を厳格に遵守します。

```
com.empasy.sync.<domain>/
├── presentation/         # Layer 1: API コントローラー、Request/Response DTO
│   ├── controller/
│   └── dto/
├── application/          # Layer 2: ビジネスユースケース、Facade、トランザクション境界
│   └── service/
├── domain/               # Layer 3: コアビジネスドメイン、Entity、VO、Repository インターフェース
│   ├── model/
│   └── repository/
└── infrastructure/       # Layer 4: DB 実装クラス (Spring Data JPA)、外部連携、MCP アダプター
    ├── persistence/
    └── client/
```

---

## 2. Mandatory Lombok コーディングルール

SyncSeries の全社品質ルールに従い、ボイラープレートコードの記述を全面的に禁止し、Lombok アノテーションへ一元化します。

### 2.1 ドメインエンティティ（Entity）
```java
@Entity
@Table(name = "tb_sync_asset")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@ToString
public class SyncAsset {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String assetCode;

    @Column(nullable = false)
    private String assetName;
}
```

### 2.2 DTO / Request / Response モデル
```java
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateAssetRequest {
    @NotBlank(message = "資産コードは必須です。")
    private String assetCode;

    @NotBlank(message = "資産名は必須です。")
    private String assetName;
}
```

---

## 3. Zero-Mock & Anti-Stub 原則

1. **ダミー Mock 禁止**: 単体テスト目的以外のプロダクションコードにおいて、ハードコードされた空リストの返却（`return List.of()`）や静的 JSON ダミーデータの返却記述を厳格に禁止します。
2. **実 DB 連携**: すべての REST API は、実際の PostgreSQL 18.6（`pgvector`）スキーマと 100% バインドされている必要があります。
3. **Linter 自動検証**: コミット前に `scripts/verify-zero-mock.ps1` を実行し、AST 静的解析に必ず合格する必要があります。
