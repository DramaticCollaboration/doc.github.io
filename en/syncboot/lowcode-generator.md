---
title: "Low-Code Full-Stack API & UI Generator"
description: "Generates Spring Boot 4.0 backend code and Vue 3 frontend admin UI code using Vben Admin standard components (BasicTable, BasicModal, BasicForm) from database table metadata."
sort: 4
---

# Low-Code Full-Stack API & UI Generator

SyncBoot's code generation module inspects database table schemas to produce **Spring Boot 4.0 backend APIs (`/api/v1/boot/...`) and Vue 3 frontend admin screens built with Vben Admin high-level standard components (`BasicTable`, `BasicModal`, `BasicForm`)**.

---

## Generated Artifact Structure

Selecting a table and running code generation produces the following components.

```
Generated Artifact Structure
├── Backend (Java / Spring Boot 4.0)
│   ├── SubscriptionController.java     # REST API endpoints (/api/v1/boot/subscriptions) & OpenAPI config
│   ├── SubscriptionService.java        # Business logic interface
│   ├── SubscriptionServiceImpl.java    # Transactional service implementation
│   ├── SubscriptionMapper.java         # MyBatis-Plus Mapper interface
│   ├── SubscriptionMapper.xml          # XML mapper query file
│   ├── SubscriptionEntity.java         # Table-mapped entity class
│   └── SubscriptionDTO.java            # Request and response DTO classes
│
└── Frontend (Vue 3 / TypeScript / Vben Admin)
    ├── index.vue                       # List view powered by PageWrapper & BasicTable
    ├── subscription.data.ts            # Separated BasicColumn[] and FormSchema[] definitions
    ├── components/
    │   └── SubscriptionModal.vue       # Standalone create/edit modal using BasicModal & BasicForm
    └── subscription.api.ts             # API client module using defHttp for /api/v1/boot/subscriptions
```

---

## Key Features

1. **Vben Standard Components & Schema Separation**: Uses `BasicTable` (`useTable`), `BasicModal` (`useModalInner`), `BasicForm` (`useForm`), and `FormSchema[]` in `*.data.ts` to generate consistent enterprise layouts.
2. **Dual-Layer Validation**: Applies identical validation rules across the frontend (`FormSchema` rules) and backend (Jakarta Bean Validation).
3. **Excel Import/Export Templates**: Provides out-of-the-box high-volume Excel download and upload code built on the EasyExcel library.
4. **OpenAPI 3.0 Integration**: Annotates generated REST APIs with Swagger annotations so they can be tested directly at `/swagger-ui/index.html`.

---

## Backend Controller Example

```java
@Tag(name = "Subscription Management", description = "Subscription Management API")
@RestController
@RequestMapping("/api/v1/boot/subscriptions")
@RequiredArgsConstructor
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    @Operation(summary = "Paginated subscription list query")
    @GetMapping
    @PreAuthorize("hasAuthority('subscription:query')")
    public Result<IPage<SubscriptionDTO>> getPage(
            @ParameterObject SubscriptionQueryDTO query,
            @ParameterObject PageParam pageParam) {
        return Result.ok(subscriptionService.queryPage(query, pageParam));
    }

    @Operation(summary = "Register new subscription")
    @PostMapping
    @PreAuthorize("hasAuthority('subscription:create')")
    public Result<Long> create(@Valid @RequestBody SubscriptionCreateDTO dto) {
        return Result.ok(subscriptionService.createSubscription(dto));
    }
}
```
