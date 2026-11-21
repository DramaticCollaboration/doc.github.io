---
title: "Intent Routing Engine"
sidebarTitle: "Intent Routing"
description: "A core control engine that analyzes business users' natural language requirements in real time, classifies them into operations (CRUD), code fixes (Code Fix), new feature development (New Feature), or QA verification, and routes them to the optimal agent."
head:
  - - meta
    - name: keywords
      content: SyncVerse, intent routing, intent analysis, Task Decomposition, Intent Classifier, AgentScope Java, RAG context, Confidence Score
  - - meta
    - property: og:title
      content: "SyncVerse: Intent Routing Engine"
  - - meta
    - property: og:description
      content: "An intelligent intent classification and task decomposition engine that cleanly separates natural language requirements into operations and development."
sort: 4
---

# Intent Routing Engine

The SyncVerse **Intent Routing Engine** is the primary entry point that analyzes every natural language directive entering the system, identifies the nature of the task, and dispatches it to the most appropriate domain agent and toolchain.

---

## 1. Separation of Operations (CRUD) vs. Development (Code)

To ensure system stability, SyncVerse strictly separates execution paths for **operational data tasks** and **source code modification tasks**.

```mermaid
flowchart TD
    Prompt["Natural Language User Directive Input"] --> Classifier{"Intent Classifier<br/>(AgentScope Java Router)"}

    Classifier -->|"Operational Data Change (Confidence >= 0.85)"| Ops["Operations (CRUD) Path<br/>SyncBoot / SyncCMS Worker"]
    Classifier -->|"Source Code / DDL Modification (Confidence >= 0.85)"| Dev["Development (Code) Path<br/>SyncSDK Coding Agent"]
    Classifier -->|"Below Confidence Threshold (< 0.85)"| Clarify["Follow-Up User Inquiry (HITL<br/>Clarification Prompt)"]

    Ops --> OpsExec["Live DB Query / Content Update"]
    Dev --> DevBranch["Create Isolated Git Branch<br/>Autonomous Software Modification"]
```

### Classification Criteria by Category

| Intent Type | Description and Example | Invoked Agents | Code Access Scope |
| :--- | :--- | :--- | :---: |
| **`OPS_DATA_CRUD`** | "Update the VIP member tier threshold to 1,000,000 KRW" | `SyncBoot`, `SyncShop` | Restricted (DB DML only) |
| **`OPS_CONTENT_UPDATE`** | "Change the main banner copy to the summer promotion" | `SyncCMS` | Restricted (Content API only) |
| **`DEV_CODE_FIX`** | "Fix the bug where point refunds are missed on payment cancellation" | `SyncSDK`, `SyncETA` | Allowed (within working branch) |
| **`DEV_NEW_FEATURE`** | "Add Kakao social login OAuth integration to user registration" | `SyncSDK`, `SyncBoot` | Allowed (within working branch) |
| **`QA_VERIFICATION`** | "Re-run the E2E tests for the shopping cart checkout flow" | `SyncETA` | Restricted (test runtime only) |

---

## 2. Confidence Score Governance

To prevent tasks from being routed down the wrong path due to intent analysis errors, the engine enforces a **Confidence Score threshold policy (default: 0.85)**.

- **Confidence $\ge 0.85$**: Automatically dispatched to the designated agent pipeline.
- **Confidence $< 0.85$**: Treated as an ambiguous directive; presents a confirmation modal to the user to request additional input.

---

## 3. Multi-Task Decomposition for Composite Requirements (Task Decomposition)

When a business user submits a multi-part request, the engine decomposes it into atomic tasks and constructs an execution chain (DAG).

### Composite Request Example:
> *"Register the new event page, add 1-per-user limit validation code to the coupon issuance logic, and run the tests."*

### Decomposition Result (DAG Chain):
```mermaid
flowchart LR
    T1["Step 1: SyncCMS<br/>(Register Event Page)"] --> T2["Step 2: SyncSDK<br/>(Modify Coupon Issuance Logic)"]
    T2 --> T3["Step 3: SyncETA<br/>(Run Coupon Issuance E2E Regression Tests)"]
    T3 --> T4["Step 4: HITL<br/>(Final Architect Deployment Approval)"]
```

---

## 4. Enterprise RAG Architecture Context Injection

For accurate intent classification and code modification, the system augments the prompt with the project's architecture specifications, DB schema DDL, and domain glossary before invoking the model.

```java
// SyncVerse internal IntentRouterService (based on AgentScope Java)
@Service
@RequiredArgsConstructor
public class IntentRouterService {

    private final ChatModel chatModel;
    private final ProjectContextRetriever contextRetriever;

    public RoutingResult route(String userPrompt, Long projectId) {
        // 1. Retrieve enterprise project context and DB schema via RAG
        String domainContext = contextRetriever.retrieveContext(projectId, userPrompt);

        // 2. Build structured prompt and run AgentScope Java ReActAgent inference
        ReActAgent routerAgent = ReActAgent.builder()
                .name("IntentRouter")
                .sysPrompt(IntentPromptTemplate.createSystemPrompt(domainContext))
                .model(chatModel)
                .build();

        Msg response = routerAgent.call(Msg.builder().role(MsgRole.USER).textContent(userPrompt).build()).block();
        return RoutingResult.fromJson(response.getTextContent());
    }
}
```
