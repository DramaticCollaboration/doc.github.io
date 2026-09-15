---
title: SyncBoot DDD & Clean Architecture 표준
shortTitle: DDD & 클린 아키텍처
category: 아키텍처 & 패턴
sort: 7
description: 도메인 주도 설계(DDD), 4계층 분리, Mandatory Lombok 규칙 및 Zero-Mock 품질 원칙
---

# SyncBoot DDD & Clean Architecture 표준

## 1. 4계층 Clean Architecture 패키지 구조

SyncBoot로 생성되거나 운영되는 모든 마이크로서비스 백엔드는 계층 간 단방향 의존성을 보장하기 위해 다음 4계층 구조를 엄격히 준수합니다:

```
com.empasy.<service>/
├── presentation/         # Layer 1: API 컨트롤러, Request/Response DTO
│   ├── controller/
│   └── dto/
├── application/          # Layer 2: 비즈니스 유스케이스, Facade, 트랜잭션 경계
│   └── service/
├── domain/               # Layer 3: 핵심 비즈니스 도메인, Entity, VO, Repository 인터페이스
│   ├── model/
│   └── repository/
└── infrastructure/       # Layer 4: DB 구현체 (Spring Data JPA), 외부 연동, MCP 어댑터
    ├── persistence/
    └── client/
```

---

## 2. Mandatory Lombok 코딩 규칙

SyncSeries의 전사 품질 규칙에 따라 보일러플레이트 코드 작성을 전면 금지하고 Lombok 애너테이션으로 일원화합니다.

### 2.1 도메인 엔티티 (Entity)
```java
@Entity
@Table(name = "tb_kmeta_asset")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@ToString
public class KmetaAsset {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String assetCode;

    @Column(nullable = false)
    private String assetName;
}
```

### 2.2 DTO / Request / Response 모델
```java
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateAssetRequest {
    @NotBlank(message = "자산 코드는 필수입니다.")
    private String assetCode;

    @NotBlank(message = "자산 명은 필수입니다.")
    private String assetName;
}
```

---

## 3. Zero-Mock & Anti-Stub 원칙

1. **더미 Mock 금지**: 단위 테스트 목적 외 프로덕션 코드에 하드코딩된 빈 리스트 반환(`return List.of()`), static JSON 더미 반환 작성을 엄격히 금지합니다.
2. **실제 DB 연동**: 모든 REST API는 실제 MariaDB/MySQL 또는 인메모리 H2 스키마와 100% 바인딩되어야 합니다.
3. **Linter 자동 검증**: 커밋 전 `scripts/verify-zero-mock.ps1`을 실행하여 AST 정적 검사를 반드시 통과해야 합니다.
