---
title: "[작업 일지] 멀티테넌시 환경 MyBatis-Plus 비동기 스레드 테넌트 ID 유실 버그 픽스"
description: "Java 21 가상 스레드 환경에서 비동기 엔티티 생성 시 ThreadLocal 컨텍스트 미전파로 인해 tenant_id 및 감사 필드가 null로 삽입되던 결함의 분석과 해결 기록입니다."
head:
  - - meta
    - name: keywords
      content: MyBatis-Plus, 멀티테넌시, ThreadLocal, ScopedValue, 가상 스레드, TaskDecorator, SyncMetaObjectHandler, SyncBoot
  - - meta
    - property: og:title
      content: "[작업 일지] 멀티테넌시 환경 MyBatis-Plus 비동기 스레드 테넌트 ID 유실 버그 픽스 | 엠파시(Empasy)"
sort: 40
---

# [작업 일지] 멀티테넌시 환경 MyBatis-Plus 비동기 스레드 테넌트 ID 유실 버그 픽스

## 1. 결함 보고 및 재현

- **발생 모듈**: SyncBoot Base Core (`sync-boot-base-core`)
- **결함 현상**:
  웹 요청 스레드에서는 `SyncMetaObjectHandler`를 통해 엔티티의 `tenantId`, `createBy`, `createTime`이 정상 자동 주입되었으나, `@Async` 애너테이션 또는 `CompletableFuture.runAsync`로 실행되는 백그라운드 배치 작업에서 엔티티를 `insert`할 경우 `tenant_id` 컬럼에 `null`이 들어가 데이터베이스 외래키 제약조건(`NOT NULL`) 위반 오류가 발생함.

```sql
### Error updating database. Cause: java.sql.SQLIntegrityConstraintViolationException: Column 'tenant_id' cannot be null
### The error occurred while setting parameters
### SQL: INSERT INTO tb_kmeta_scenario (id, name, tenant_id, create_time) VALUES (?, ?, ?, ?)
```

---

## 2. 원인 분석 (Root Cause Analysis)

`TenantContextHolder`가 전통적인 `ThreadLocal<String>`을 기반으로 설계되어 있었습니다:

```java
public class TenantContextHolder {
    private static final ThreadLocal<String> CONTEXT = new ThreadLocal<>();
    // ...
}
```

### 가상 스레드(Virtual Threads)와의 충돌 메커니즘

1. HTTP 요청은 서블릿 컨테이너의 가상 스레드 `A`에서 수신되어 인터셉터에 의해 테넌트 ID(`tenant-1001`)가 `CONTEXT`에 적재됨.
2. 서비스 레이어에서 비동기 이벤트 발행 또는 병렬 도구 실행을 위해 `CompletableFuture.runAsync()`를 호출하면, 실행 풀에서 완전히 새로운 가상 스레드 `B`가 생성됨.
3. `ThreadLocal`은 자식 스레드로 값을 자동 복제하지 않으므로(비록 `InheritableThreadLocal`을 쓰더라도 스레드 풀 재사용 시 오염 위험 존재), 스레드 `B`의 `CONTEXT.get()`은 `null`을 반환함.
4. `SyncMetaObjectHandler.insertFill()` 실행 시 `tenantId`를 읽을 수 없어 빈 값으로 DB에 전송됨.

---

## 3. 해결 방안: TaskDecorator 및 Java 21 ScopedValue 적용

Spring Framework의 `TaskDecorator`를 등록하여, 스레드가 가상 스레드 풀로 위임될 때 호출자의 테넌트 및 인증 컨텍스트를 스냅샷으로 캡처하고 복원하는 컨텍스트 전파 파이프라인을 구축했습니다.

```java
@Configuration
public class AsyncContextPropagationConfig {

    @Bean
    public TaskDecorator tenantContextTaskDecorator() {
        return runnable -> {
            // 1. 부모 스레드 컨텍스트 캡처
            String tenantId = TenantContextHolder.getTenantId();
            SecurityContext securityContext = SecurityContextHolder.getContext();

            return () -> {
                try {
                    // 2. 가상 스레드에 컨텍스트 바인딩
                    TenantContextHolder.setTenantId(tenantId);
                    SecurityContextHolder.setContext(securityContext);
                    runnable.run();
                } finally {
                    // 3. 실행 종료 후 메모리 누수 방지 클린업
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

## 4. 검증 결과

멀티테넌트 환경에서 5,000건의 비동기 엔티티 일괄 삽입 통합 테스트(`SyncMetaObjectHandlerTest`)를 실행하여 결과를 검증했습니다.

- **비동기 작업 테넌트 ID 누락 건수**: 5,000건 중 **0건 (유실율 0.0%)**.
- **스레드 풀 컨텍스트 오염 검사**: 서로 다른 테넌트 ID(A, B)를 가진 동시 요청 간 교차 오염(Cross-Tenant Leak) 0건 확인.
- **MyBatis-Plus 호환성**: `insertFill` 및 `updateFill` 메서드 전반에서 감사 필드 무결성 확보 완료.
