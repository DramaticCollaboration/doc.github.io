---
title: SyncBoot DDD & Clean Architecture Standard
shortTitle: DDD & Clean Architecture
category: Architecture & Patterns
sort: 7
description: "Domain-Driven Design (DDD), 4-layer separation, Mandatory Lombok rules, and Zero-Mock quality principles"
---

# SyncBoot DDD & Clean Architecture Standard

## 1. 4-Layer Clean Architecture Package Structure

All microservice backends generated or operated by SyncBoot strictly adhere to the following 4-layer structure to guarantee unidirectional dependencies across layers:

```
com.empasy.sync.<domain>/
├── presentation/         # Layer 1: API controllers, Request/Response DTOs
│   ├── controller/
│   └── dto/
├── application/          # Layer 2: Business use cases, Facades, transaction boundaries
│   └── service/
├── domain/               # Layer 3: Core business domain, Entities, VOs, Repository interfaces
│   ├── model/
│   └── repository/
└── infrastructure/       # Layer 4: DB implementations (Spring Data JPA), external integrations, MCP adapters
    ├── persistence/
    └── client/
```

---

## 2. Mandatory Lombok Coding Rules

In accordance with SyncSeries enterprise quality standards, writing boilerplate code manually is strictly prohibited and standardized around Lombok annotations.

### 2.1 Domain Entity
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

### 2.2 DTO / Request / Response Models
```java
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateAssetRequest {
    @NotBlank(message = "Asset code is required.")
    private String assetCode;

    @NotBlank(message = "Asset name is required.")
    private String assetName;
}
```

---

## 3. Zero-Mock & Anti-Stub Principles

1. **No Dummy Mocks**: Returning hardcoded empty lists (`return List.of()`) or static JSON dummy responses in production code outside unit tests is strictly prohibited.
2. **Real DB Integration**: Every REST API must be 100% bound to the real PostgreSQL 18.6 (`pgvector`) schema.
3. **Automated Linter Verification**: Before committing, you must run `scripts/verify-zero-mock.ps1` and pass the AST static check.
