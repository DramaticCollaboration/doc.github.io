---
title: 로우코드 풀스택 API & UI 생성기
description: 데이터베이스 테이블 메타데이터를 기반으로 Spring Boot 3 백엔드 코드와 Ant Design Vue 3 프론트엔드 관리자 UI 코드를 생성합니다.
sort: 4
---

# 로우코드 풀스택 API & UI 생성기

SyncBoot의 코드 생성 모듈은 데이터베이스 테이블 구조를 분석하여 **Spring Boot 3 백엔드 API와 Ant Design Vue 3 프론트엔드 관리자 화면** 소스코드를 생성합니다.

---

## 생성 아티팩트 구성

테이블을 선택하고 코드 생성을 실행하면 아래 구성요소가 생성됩니다.

```
📁 생성되는 아티팩트 구성
├── Backend (Java / Spring Boot 3)
│   ├── SubscriptionController.java     # REST API 엔드포인트 & OpenAPI 문서 설정
│   ├── SubscriptionService.java        # 비즈니스 로직 인터페이스
│   ├── SubscriptionServiceImpl.java    # 트랜잭션 서비스 구현체
│   ├── SubscriptionMapper.java         # MyBatis-Plus Mapper 인터페이스
│   ├── SubscriptionMapper.xml          # XML 매퍼 쿼리 파일
│   ├── SubscriptionEntity.java         # 테이블 매핑 엔티티 클래스
│   └── SubscriptionDTO.java            # 요청 및 응답 DTO 클래스
│
└── Frontend (Vue 3 / TypeScript)
    ├── SubscriptionList.vue            # 검색 필터 및 데이터 테이블 화면
    ├── SubscriptionModal.vue           # 등록/수정 모달 및 유효성 검증 로직
    └── subscription.api.ts             # Axios 기반 API 통신 모듈
```

---

## 주요 기능

1. **검색 및 필터 조건 구성**: 날짜 범위 선택기, 드롭다운 셀렉트, 키워드 검색 등 필터 조건을 UI에서 구성하여 백엔드 쿼리와 연동합니다.
2. **이중 유효성 검증**: 프론트엔드(Ant Design Form Rules)와 백엔드(Jakarta Bean Validation)에 동일한 검증 규칙을 적용합니다.
3. **엑셀 입출력 템플릿**: EasyExcel 라이브러리를 기반으로 대용량 데이터 엑셀 다운로드 및 업로드 코드를 기본 제공합니다.
4. **OpenAPI 3.0 연동**: 생성된 REST API에 Swagger 애노테이션이 적용되어 `/swagger-ui/index.html`에서 테스트할 수 있습니다.

---

## 백엔드 Controller 예시

```java
@Tag(name = "Subscription Management", description = "정기 결제 구독 관리 API")
@RestController
@RequestMapping("/api/v1/subscriptions")
@RequiredArgsConstructor
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    @Operation(summary = "구독 목록 페이징 조회")
    @GetMapping
    @PreAuthorize("hasAuthority('subscription:query')")
    public Result<IPage<SubscriptionDTO>> getPage(
            @ParameterObject SubscriptionQueryDTO query,
            @ParameterObject PageParam pageParam) {
        return Result.ok(subscriptionService.queryPage(query, pageParam));
    }

    @Operation(summary = "신규 구독 등록")
    @PostMapping
    @PreAuthorize("hasAuthority('subscription:create')")
    public Result<Long> create(@Valid @RequestBody SubscriptionCreateDTO dto) {
        return Result.ok(subscriptionService.createSubscription(dto));
    }
}
```
