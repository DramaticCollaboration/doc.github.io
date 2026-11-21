---
title: Scrumban
description: "Scrumban is a hybrid agile methodology that combines Scrum's iterative structure with Kanban's flow management and WIP limits to manage work flexibly and efficiently."
head:
  - - meta
    - name: keywords
      content: "Scrumban, Scrumban introduction, Scrumban concept, what is Scrumban, Scrumban overview, Scrumban fundamentals, Scrum vs Kanban differences, Scrum vs Kanban, agile methodology, agile framework, Kanban methodology, Scrum methodology, Scrumban process, Scrumban operations guide, Scrumban board, WIP limits, workflow management, how to use a Kanban board, Scrumban benefits, Scrumban characteristics, Scrumban impact, Scrumban use cases, Scrumban adoption benefits, Scrumban Jira setup, Scrumban board template, Scrumban tools, Scrumban collaboration tools, Scrumban workflow, agile project management, work efficiency methodology, iterative work management, bottleneck resolution"
  - - meta
    - property: og:title
      content: Scrumban
  - - meta
    - property: og:description
      content: "Scrumban is a hybrid agile methodology that combines Scrum's iterative structure with Kanban's flow management and WIP limits to manage work flexibly and efficiently."
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/agile/scrumban
sort: 201
---

# Scrumban

> **One-Line Summary:** Scrumban is a process that combines Scrum's structure (roles, ceremonies, and backlog concepts) with Kanban's flow-centric approach and Work In Progress (WIP) limits. Rather than enforcing the rigidity of sprints, it prioritizes **Flow** and **Pull** while retaining Scrum ceremonies (planning and retrospectives) where needed.

> **Note:** For full-lifecycle project bidding, contracting, delivery of the 125 unified standard artifacts, and the AI Software Development Lifecycle (AI-SDLC), refer to the **[Empasy Business and Development Methodology Portal](/en/methodology/)**.


## Overview and Definition

**Scrumban** is a hybrid process designed to help software development and knowledge work teams manage their workflow flexibly.

- **Scrum**: Iterations (sprints), fixed ceremonies (sprint planning, review, retrospective), clearly defined roles
- **Kanban**: Visual boards, WIP limits, pull-based work, continuous improvement
  Scrumban adopts the strengths of both approaches while focusing on **practical flow improvement**.


## When Should You Use Scrumban?

- Your team currently uses **Scrum**, but frequent changes (urgent requests) make it difficult to bundle work into fixed sprints.
- Your team manages flow with **Kanban**, but needs Scrum-like discipline such as backlog management, prioritization, and regular retrospectives.
- Your team handles maintenance, operations, and support (a mix of operational tasks and new feature development).
- You prioritize **continuous delivery** and flow optimization over upfront predictability.


## Core Concepts

1. **Pull System**: Work begins (is pulled into the next column) only when the team has capacity to handle it.
2. **WIP (Work In Progress) Limits**: Restricting the number of concurrent tasks reduces multitasking and accelerates completion.
3. **Visualized Board**: Clearly displays the status of work and makes bottlenecks immediately visible.
4. **Regular Replenishment / Planning**: Populates work from the backlog only when needed (either periodically or when a threshold is reached).
5. **Measurement and Improvement**: Improves flow using metrics such as cycle time, lead time, and throughput.
6. **Explicit Policies**: Formalizes column transition criteria, prioritization rules, and the Definition of Ready/Done.


## Scrum vs. Kanban vs. Scrumban

| Item | Scrum | Kanban | Scrumban |
| :--- | ---: | :--- | :--- |
| Iterations (Sprints) | Yes (fixed length) | No (continuous flow) | Optional / hybrid with short iterations |
| WIP Limits | Implicit (sprint scope) | Explicit | Explicit (core) |
| Planning Method | Sprint planning | Replenishment / pull-based | Replenishment + planning as needed |
| Roles | PO / SM / Dev | Flexible (no prescribed roles) | PO + Flow Manager (or retain SM role) |
| Goal | Commitment (sprint goal) | Flow optimization | Flow optimization + priority management |


## Roles and Responsibilities

- **Product Owner (PO)**: Manages backlog prioritization, coordinates stakeholders, and defines business value
- **Flow Manager (or retaining the Scrum Master role)**: Monitors flow, helps remove bottlenecks, and facilitates process improvement
- **Team (Developers, Testers, etc.)**: Adheres to defined policies and pulls/completes work within WIP limits
- **Stakeholders**: Provide requirements and feedback, and participate in reviews when needed

> Adjust roles flexibly to fit your team's context. The key is ensuring **flow management accountability** is clear.

## Core Artifacts and Tools

- **Kanban Board** (physical or digital) — including columns and WIP limits
- **Backlog (Prioritized List)** — work candidates ready to be pulled
- **Explicit Policies** — column transition rules and definitions (Ready/Done)
- **Classes of Service** — priority categories such as Expedite, Fixed Date, and Standard
- **Metrics Dashboard**: Cycle time, lead time, throughput, and CFD (Cumulative Flow Diagram)


## Board Layout

Basic Scrumban board (example):

| Column | Description | Recommended WIP Limit |
| :--- | :--- | ---: |
| Backlog | All prioritized work items | — |
| Ready | Work ready to start (eligible to move to Doing) | — |
| Doing / In Progress | Actively being worked on | 3 |
| Code Review | Awaiting review | 2 |
| Testing | QA / verification | 2 |
| Done | Completed | — |

**Simple ASCII Board:**

```
Backlog -> Ready -> [Doing (WIP 3)] -> Code Review (WIP 2) -> Testing (WIP 2) -> Done
```

## Workflow Policy Examples

```text
Policy: Pull Criteria (Moving to Doing)
- Card is in the Ready column, and Doing WIP < WIP limit
- Work item meets the 'Definition of Ready' (requirements, test cases, design, etc.)
- Required resources (testers/reviewers) are confirmed available

Policy: Definition of Done
- Code is merged and the build succeeds
- Automated and manual tests pass
- Deployment (or QA handoff) documentation is complete
```

**Classes of Service Examples**

- **Expedite**: Immediate handling (highest work priority; WIP limit exception allowed)
- **Fixed Date**: Required by a specific date — requires schedule monitoring
- **Standard**: Regular requests
- **Intangible**: Long-term value items such as technical debt


## Events and Recommended Cadence

- **Daily Stand-up (Daily, 10–15 minutes)**: Flow-focused (share bottlenecks and blockers rather than status updates on what each person is doing)
- **Replenishment / Backlog Refinement (Weekly or as needed)**: Refill the Ready column — reprioritize items
- **Planning (As needed)**: Break down large work items (epics) or plan alternatives — keep it brief
- **Retrospective (Every 2–4 weeks)**: Process improvement and review of WIP limit adjustments
- **Service Delivery Review / Ops Review (Monthly)**: Review SLAs, SLEs, and flow metrics

> Unlike Scrum, you do not need to rigidly schedule every meeting. Introduce ceremonies when you observe **friction points disrupting flow**.


## Estimation and Planning Methods

- **Keep Story Points**: Suitable for teams transitioning from Scrum; useful for forecasting against throughput.
- **No Estimates**: Forecast using simple card counts combined with cycle time and throughput.
- **Bucket (Time-Period) Planning**: Replenish work monthly based on achievable throughput.
- **Recommendation**: Minimize heavy estimation overhead and forecast using **actual historical data (cycle time, throughput)**.


## Core Metrics (Definitions and Usage)

- **Lead Time** = Time from when a card enters the backlog (or is created) to completion
- **Cycle Time** = Time from when work starts (Doing) to completion
- **Throughput** = Number of cards completed within a specific period
- **WIP (Average Work In Progress)**
- **Cumulative Flow Diagram (CFD)**: Visualizes bottlenecks and flow changes across the cumulative area of each column
- **Service Level Expectation (SLE)**: Example: 85% of work items will be completed within 10 days

**Practical Usage Notes**

- Little's Law: `WIP = Throughput × Cycle Time` (using average values) — useful for forecasting and identifying limits
- Goal: Stabilize cycle time → increase predictability


## Transitioning from Scrum to Scrumban

1. **Map the Current Process**: Visualize how work currently flows
2. **Configure the Board**: Start with minimal columns (Ready → Doing → QA → Done)
3. **Set WIP Limits**: Start conservatively (e.g., Doing = number of team members ÷ 2)
4. **Define Replenishment Rules**: Decide when to pull items from Backlog into Ready (weekly or threshold-based)
5. **Collect Data**: Gather cycle time and throughput data (2–4 weeks)
6. **Iterate and Adjust**: Refine WIP limits, columns, and policies during retrospectives


## Kanban/Scrumban Adoption Checklist

- [ ] Does the board reflect the team's actual workflow?
- [ ] Are WIP limits set and understood by everyone?
- [ ] Are the Definition of Ready and Definition of Done documented?
- [ ] Is a replenishment cadence (or trigger rule) established?
- [ ] Do daily stand-ups focus on resolving bottlenecks?
- [ ] Are cycle time, throughput, and CFD collected and analyzed?
- [ ] Are classes of service and explicit policies defined?
- [ ] Are process changes reflected in regular retrospectives?


## Practical Tips and Best Practices

- **Start Small**: Keep the initial board and WIP limits small to gather fast feedback.
- **Stop Starting — Start Finishing**: Build a culture of finishing active work before starting new items.
- **Team Discipline on WIP Violations**: Discuss immediately when a limit is breached (identify why it happened and the root bottleneck).
- **Visual Signals**: Mark blockers and expedite cards with distinct colors or stickers.
- **Document Policies**: Explicitly write down the criteria for "when a card moves to the next column."
- **Automation**: Shorten cycle time with CI/CD and automated testing.
- **Data-Driven Decisions**: Plan using actual cycle time and throughput rather than guesswork estimates.


## Common Mistakes

- Setting WIP limits without enforcing them
- Keeping Scrum ceremonies intact while ignoring WIP and pull principles
- Creating classes of service and applying them inconsistently (causing priority confusion)
- Making decisions by "gut feel" without collecting metrics
- Overcomplicating the board with too many columns or excessive granularity


## Template: Replenishment Meeting (Brief Agenda)

1. Brief review of work completed last week — 5 min
2. Check Ready column status (re-order priorities) — 10–20 min
3. Check current available capacity against WIP limits — 5 min
4. Decide on new work to pull (fill in priority order) — 10–20 min
5. Share blockers and risks — 5 min


## FAQ

**Q. Do sprints disappear completely?**
A. If the team prefers, you can retain short iterations (e.g., 2 weeks) while applying Scrumban principles. The focus is improving flow.

**Q. Should we continue using story points?**
A. Not necessarily. Many teams forecast using throughput and cycle time instead. Decide based on team culture and reporting needs.

**Q. How should we determine WIP limits?**
A. Start conservatively (based on team size or estimated from past throughput), then adjust gradually while respecting the limits.


## Implementation Example

- Team of 5 → Doing WIP = 3 (limits concurrent work)
- Replenishment: Weekly (Mondays)
- Retrospective: Every 2 weeks (hybrid online/in-person)
- Metrics: Track weekly throughput + 4-week rolling cycle time


## Conclusion — Getting Started Guide

1. **Build the board**,
2. **Set WIP limits**,
3. **Document pull rules and Definitions**, and then
4. **Collect data (cycle time and throughput) for 2–4 weeks** and **adjust in retrospectives**.
