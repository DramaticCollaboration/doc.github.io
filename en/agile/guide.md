---
title: Scrumban Operations Guide
description: "Scrumban is a hybrid Agile methodology that combines Scrum's iterative structure with Kanban's flow management and WIP limits for flexible, efficient work management."
head:
  - - meta
    - name: keywords
      content: Scrumban, Scrumban overview, Scrumban concepts, what is Scrumban, Scrum vs Kanban, Agile methodology, Agile framework, Kanban methodology, Scrum methodology, Scrumban process, Scrumban operations guide, Scrumban board, WIP limits, workflow management, Kanban board usage, Scrumban benefits, Scrumban features, Scrumban use cases, Scrumban Jira setup, Scrumban board template, Scrumban tools, Scrumban collaboration tools, Scrumban workflow, Agile project management, work efficiency methodology, iterative task management, bottleneck resolution
  - - meta
    - property: og:title
      content: Scrumban
  - - meta
    - property: og:description
      content: "Scrumban is a hybrid Agile methodology that combines Scrum's iterative structure with Kanban's flow management and WIP limits for flexible, efficient work management."
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/agile/guide
sort: 300
---

# Scrumban Standard Operations Guide

## 1. Overview

Scrumban is a hybrid process that combines the structure of **Scrum** with the flexible flow management of **Kanban**.

- Rules, roles, and backlog management provided by **Scrum**
- WIP limits, pull systems, and flow visualization provided by **Kanban**
  Combining these two enables teams to **adapt rapidly to change** and **optimize workflow**.

> **Core Philosophy**
> "**Stop starting, start finishing**" — Finish work already in progress rather than starting new work.

---

## 2. Core Principles

1. **Pull-Based Work**

- Work is started only when the team has the capacity to handle it.
- Forcefully "pushing" work into the pipeline disrupts the flow.

2. **WIP (Work In Progress) Limits**

- Limit the number of items in progress concurrently to prevent quality degradation and multitasking overhead.
- Example: For a 5-person team, `Doing WIP = 3`.

3. **Workflow Visualization**

- Make every work item's status visible at a glance on a Kanban board.
- Bottlenecks can be identified immediately.

4. **Explicit Policies**

- Document the entry/exit criteria for moving items into each column (such as Definition of Ready and Definition of Done) and share them across the entire team.

5. **Data-Driven Improvement**

- Measure Cycle Time, Throughput, WIP, and CFD (Cumulative Flow Diagram) to guide process improvements.

---

## 3. Roles and Responsibilities

| Role | Primary Responsibilities | Notes |
| --- | --- | --- |
| **Product Owner (PO)** | Backlog management, prioritization, requirement clarification, communicating business goals | Retained directly from Scrum |
| **Flow Manager / Scrum Master** | WIP monitoring, removing blockers, facilitating retrospectives, driving process improvement | Similar to Kanban's Service Delivery Manager role |
| **Team Members (Dev, QA, etc.)** | Adhering to WIP limits, pull-based execution, updating card statuses, ensuring quality | Requires autonomy and ownership |
| **Stakeholders** | Providing feedback, participating in demos and reviews | Regular engagement required |

---

## 4. Activities by Process Stage

| Stage | Activity | Detailed Description | Policy (Example) |
| --- | --- | --- | --- |
| **Backlog** | Request and idea intake | Starting point for all work, including customer requests, bugs, tech debt, and new features | Assign priority and Class of Service to every card |
| **Ready** | DoR verification, work prepared | Clarify requirements, secure resources, define test conditions | Move only after passing the DoR checklist |
| **Doing** | Work execution | Pull within WIP limit and carry out development/implementation | `Doing WIP = 3` |
| **Review** | Code and document review | Verify quality, standards, security, and test coverage | Move to Testing upon reviewer approval |
| **Testing** | Quality verification | Automated and manual testing, defect resolution | Move to Done upon QA sign-off |
| **Done** | Work completion | Meet DoD, complete documentation/deployment, record Cycle Time | Apply completion tag |

---

## 5. Definition Criteria

### 5.1 Definition of Ready (DoR)

- Requirements are clear and documented
- Required designs and resources are secured
- Test conditions are defined
- Estimated scope and complexity are confirmed

### 5.2 Definition of Done (DoD)

- Code merged and build succeeds
- Automated and manual tests pass
- Documentation and release notes written
- Deployed (or delivered to the customer)

---

## 6. Meeting (Event) Operations Guide

| Meeting | Purpose | Cadence | Duration | Characteristics |
| --- | --- | --- | --- | --- |
| **Daily Stand-up** | Share progress and blockers | Daily | 10–15 min | Discuss focused on column flow |
| **Replenishment** | Refill the Ready column | Weekly or at threshold | 30 min | Re-align priorities |
| **Retrospective** | Process improvement | Every 2–4 weeks | 30–60 min | Adjust WIP limits and policies |
| **Service Delivery Review** | Review SLA/SLE compliance | Monthly | 30 min | Metrics-driven review |

---

## 7. WIP Limit Operations

- Initial value: `Team size ÷ 2`
- Example WIP limits per column:

  - Doing: 3
  - Review: 2
  - Testing: 2

- If WIP exceeds the limit, immediately analyze the root cause (bottlenecks, staffing gaps, blockers, etc.)
- Prohibit starting new work until the excess is resolved

---

## 8. Metrics Management

| Metric | Definition | Usage |
| --- | --- | --- |
| **Lead Time** | Request created → Done | Analyze customer wait time |
| **Cycle Time** | Work started → Done | Measure flow stability |
| **Throughput** | Number of cards completed per period | Forecast productivity |
| **Average WIP** | Average number of items in progress | Prevent bottlenecks and multitasking |
| **CFD** | Cumulative item count per column | Identify bottleneck stages |

> **Tip:** Applying Little's Law
> `WIP = Throughput × Cycle Time`
> → Adjusting any one of WIP, Throughput, or Cycle Time changes the others.

---

## 9. Sample Operating Rules

1. Always check WIP limits before pulling work
2. Assign a priority and owner to every card
3. Flag blockers immediately (stickers or labels)
4. Strictly timebox meetings (Stand-up ≤ 15 min)
5. Apply process changes only after team consensus in a Retrospective

---

## 10. Process Visualization Example

```
[Backlog]
  ↓ (Replenishment)
[Ready]
  ↓ (Pull & WIP Check)
[Doing]
  ↓ (Development Complete)
[Review]
  ↓ (Review Approved)
[Testing]
  ↓ (QA Passed)
[Done]
```

---

## 11. Improvement Cycle

1. Collect metrics (Cycle Time, Throughput, WIP)
2. Analyze bottlenecks and variability
3. Adjust WIP limits, policies, and board structure
4. Run a 1–2 week trial
5. Validate impact in the Retrospective and finalize

---

## 12. Appendix

### Sample Classes of Service

- **Expedite**: Immediate handling (urgent)
- **Fixed Date**: Hard deadline on a specific date
- **Standard**: Regular requests
- **Intangible**: Long-term value such as technical debt

### Recommended Tools

- Jira, Trello, Azure DevOps, Miro, ClickUp

---

**Key Takeaway**
Scrumban is a methodology focused on "**keeping rules minimal while optimizing flow**."
The process must continuously evolve based on the team's **data and consensus**.

---
