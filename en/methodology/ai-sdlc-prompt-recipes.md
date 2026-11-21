---
title: "Practical Prompt Recipes by Scenario (Cheat Sheet)"
description: "A collection of copy-and-paste prompt templates for every stage of practical software development, from planning and architecture to backend, frontend, QA, troubleshooting, and code review."
head:
  - - meta
    - name: keywords
      content: "SyncVerse, AI prompts, development prompts, Spring Boot, Vue 3, DDL, unit tests, debugging, prompt recipes"
  - - meta
    - property: og:title
      content: "Practical Prompt Recipes by Scenario (Cheat Sheet)"
  - - meta
    - property: og:description
      content: "Ready-to-use prompt recipes you can copy and paste across every stage of practical development"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/methodology/ai-sdlc-prompt-recipes
sort: 106
---

# Practical Prompt Recipes by Scenario (Cheat Sheet)

> **Usage Guide:** This prompt collection provides practical templates organized across every phase of development—planning, design, implementation, testing, troubleshooting, and deployment. Simply replace the **`{{variable}}`** placeholders to fit your project context and copy and paste them directly.

---

## Table of Contents and Quick Navigation

* [1. Planning and Requirements Analysis (Planner / PO)](#1-planning-and-requirements-analysis)
* [2. Architecture and Database Design (Architect / DBA)](#2-architecture-and-database-design)
* [3. Backend Java Spring Boot Implementation (Backend Developer)](#3-backend-java-spring-boot-implementation)
* [4. Frontend Vue 3 and Modal Separation (Frontend Developer)](#4-frontend-vue-3-and-modal-separation)
* [5. Testing and Quality Verification (QA Engineer)](#5-testing-and-quality-verification)
* [6. Error Resolution and Auto-Fix (Debugging / Troubleshooting)](#6-error-resolution-and-auto-fix)
* [7. Code Review and Deployment Summary (Reviewer / Operator)](#7-code-review-and-deployment-summary)

---

## 1. Planning and Requirements Analysis (Planner / PO) {#1-planning-and-requirements-analysis}

### Prompt 1.1: Discovering Edge Cases and Missing Conditions
```markdown
[Role] Principal IT Service Planner and Business Analyst
[Feature Name] {{feature_name, e.g., Shopping Cart Coupon Application}}
[Basic Description] {{2-3 lines describing the feature}}

[Request]
Before starting development on this feature, present 5 technical and business edge cases that must be decided upfront during the planning phase, formatted as questions.
1. Policies for payment, cancellation, and refund
2. Boundary conditions for minimum order amount and maximum discount amount
3. Expiration handling and duplicate application attempts across multiple devices
4. Stacking rules with other discounts (points, partner cards)
```

### Prompt 1.2: Generating Scenario-Based Acceptance Criteria
```markdown
[Role] Requirements Analysis and Test Design Specialist
[Context]
- Target Feature: {{feature_name}}
- Confirmed Policy: {{confirmed_policy_details}}

[Request]
Write testable Acceptance Criteria for QA verification.
- Scenario 1: Normal flow (Happy Path)
- Scenario 2: Input validation failure (Validation Error)
- Scenario 3: Insufficient balance/inventory or business limit exceeded
- Scenario 4: Network timeout or concurrent request conflict
```

---

## 2. Architecture and Database Design (Architect / DBA) {#2-architecture-and-database-design}

### Prompt 2.1: Generating Standard PostgreSQL 18.6 DDL
```markdown
[Role] Principal Database Architect
[Database] PostgreSQL 18.6
[Domain] {{domain_name, e.g., shop_coupon}}
[Requirements] {{functional_specification_content}}

[Authoring Rules]
1. Use lowercase snake_case ({{domain_entity}}) for table names.
2. Apply the BIGINT standard for the primary key id.
3. Include audit columns (created_at, updated_at, created_by, updated_by, del_flag).
4. Add explicit indexes (INDEX) for frequently queried columns.
5. Instead of temporary conflict-avoidance clauses (such as `ON CONFLICT DO NOTHING`), write pure CREATE TABLE and INSERT statements with verified uniqueness.

[Output Format]
- Mermaid entity-relationship diagram
- 02_schema_domain.sql DDL script (tables, indexes, comments)
```

### Prompt 2.2: Standard REST API Specification and OpenAPI Definition
```markdown
[Role] RESTful API Design Specialist
[Target Endpoint] {{resource_path, e.g., /api/v1/shop/cart/coupon}}
[Data Model] {{related_table_column_info}}

[Authoring Rules]
1. Single mapping principle: Assign only one canonical URL per resource.
2. Strictly follow the `/api/v1/{domain}/{resource}` path format.
3. Apply the common response structure (CommonResult: code, message, result, timestamp).

[Output Format]
1. API endpoint summary table (method, URL, description, permission)
2. Example JSON responses for success and failure scenarios
3. OpenAPI 3.0 YAML specification snippet
```

---

## 3. Backend Java Spring Boot Implementation (Backend Developer) {#3-backend-java-spring-boot-implementation}

### Prompt 3.1: Applying Lombok and Implementing Standard Services
```markdown
[Role] Senior Spring Boot Developer
[Tech Stack] Java 25, Spring Boot 4.0, PostgreSQL 18.6
[Implementation Target] {{feature_to_implement, e.g., coupon application business logic}}
[Prerequisite Specs] {{confirmed_ddl_and_api_spec}}

[Authoring Rules]
1. Apply Project Lombok:
   - Use private final fields with @RequiredArgsConstructor constructor injection instead of @Autowired field injection.
   - Use @Slf4j for logging.
   - Apply @Getter, @Builder, @NoArgsConstructor, and @AllArgsConstructor to DTOs.
2. Use only a single standard URL (`/api/v1/...`) for controller mappings.
3. Apply @Transactional(readOnly = true) for read-only queries and @Transactional for data-mutating methods.
4. Write complete code integrated with the actual data access layer instead of temporary dummy returns (such as return null).
```

---

## 4. Frontend Vue 3 and Modal Separation (Frontend Developer) {#4-frontend-vue-3-and-modal-separation}

### Prompt 4.1: Creating an Independent BasicModal Popup Component
```markdown
[Role] Vue 3 and TypeScript Frontend Developer
[Implementation Target] {{modal_feature_description, e.g., modal for selecting and applying available coupons}}
[Integrated API] {{backend_api_url_and_request_response_json}}

[Authoring Rules]
1. Use the framework's standard modal component, BasicModal.
2. Do not write the modal inline in the parent view; extract it into an independent file at components/CouponApplyModal.vue.
3. Apply appropriate padding (p-4) inside the modal container.
4. Include substantive UI elements such as a table, radio selection, and discount amount preview rather than a bare empty screen.
5. Explicitly declare interface Props and Emits (open, success, confirm).
```

---

## 5. Testing and Quality Verification (QA Engineer) {#5-testing-and-quality-verification}

### Prompt 5.1: Generating JUnit 5 Unit Tests for Exception Cases
```markdown
[Role] Senior QA Engineer
[Code Under Test]
{{service_or_controller_source_code_to_test}}
[Acceptance Criteria]
{{given_when_then_scenarios}}

[Authoring Rules]
1. In addition to the happy path, write individual @Test methods for at least 3 abnormal exception scenarios:
   - Expiration attempt, insufficient balance attempt, duplicate concurrent invocation attempt
2. Write assertions using AssertJ (assertThat, assertThatThrownBy).
3. Avoid empty tests without assertions and verify at least 2 outcomes per test.
4. Clearly state the test purpose in natural language inside @DisplayName.
```

---

## 6. Error Resolution and Auto-Fix (Debugging / Troubleshooting) {#6-error-resolution-and-auto-fix}

### Prompt 6.1: Auto-Fixing Build Errors and Test Failures
```markdown
[Role] Software Debugging and Error Resolution Agent
[Context] A compile error or test failure occurred during the build.
[Error Log]
{{error_log_stack_trace}}

[Source Code with Error]
{{full_source_code_of_affected_file}}

[Authoring Rules]
1. Root Cause Analysis: Summarize the error cause in 2 lines or fewer.
2. Side-Effect Check: Assess potential impacts of the fix.
3. Replacement Code: Provide the complete file source code ready for direct replacement.
   - [Caution] Do not arbitrarily delete business validation checks (if statements) just to make the error disappear.
   - [Caution] Do not leave method bodies empty (// TODO).
```

### Prompt 6.2: Resolving Query Performance Bottlenecks (N+1 Problem, etc.)
```markdown
[Role] Database Query Tuning Specialist
[Context] A slow query or N+1 issue occurred in a specific API during service execution.
[Target Code or Query Log]
{{mapper_xml_or_jpa_entity_repository_code}}

[Request]
1. Explain the root cause of the query bottleneck.
2. Propose the most suitable tuning approach, such as join queries or batch fetching.
3. Compare the expected query execution count and performance difference before and after tuning.
```

---

## 7. Code Review and Deployment Summary (Reviewer / Operator) {#7-code-review-and-deployment-summary}

### Prompt 7.1: Structuring a PR Description Based on Git Diff
```markdown
[Role] Release Engineering Technical Writer
[Git Diff Content]
{{paste_git_diff_content}}

[Required Sections]
1. Work Overview (background and purpose)
2. Key Changes (backend, frontend, DB schema)
3. Notes and Risk Assessment (impact on existing features)
4. Summary of Test Verification Results
```

### Prompt 7.2: Writing Architecture-Focused Code Review Comments
```markdown
[Role] Principal System Architect and Security Reviewer
[Code Under Review]
{{modified_source_code_to_review}}

[Review Criteria]
1. Concurrency defects and proper transaction boundary configuration
2. Security vulnerabilities (SQL injection, sensitive data exposure, missing authorization checks)
3. Compliance with internal standards (Lombok usage, single canonical URL, modal component separation)
4. Readability and Single Responsibility Principle

[Output Format]
Line-by-line concrete improvement suggestions (including before/after code examples) and an overall verdict.
```
