---
title: Scrumban Stage-by-Stage Activities
description: Practical guide to Scrumban stage-by-stage activities across sprint planning, development, review, and retrospective phases with role deliverables.
head:
  - - meta
    - name: keywords
      content: Scrumban, Scrumban introduction, Scrumban concept, what is Scrumban, Scrum vs Kanban, agile methodology, agile framework, Kanban methodology, Scrum methodology, Scrumban process, Scrumban operations guide, Scrumban board, WIP limit, workflow management, how to use Kanban board, Scrumban benefits, Scrumban characteristics, Scrumban impact, Scrumban use cases, Scrumban adoption benefits, Scrumban Jira setup, Scrumban board template, Scrumban tool, Scrumban collaboration tool, Scrumban workflow, agile project management, work efficiency methodology, iterative task management, bottleneck resolution
  - - meta
    - property: og:title
      content: Scrumban
  - - meta
    - property: og:description
      content: Scrumban is a hybrid agile methodology that combines Scrum's iterative structure with Kanban's flow management and WIP limits to manage work flexibly and efficiently.
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/agile/activity
sort: 400
---

# Scrumban Stage-by-Stage Activity Guide

| Stage | Key Activities | Detailed Description |
| ----------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Backlog** | - Collect new ideas/requests<br>- Record backlog items<br>- Assign Class of Service | The starting point for all work.<br>The **Product Owner** or team records business requests, bugs, technical debt, and similar items.<br>Each card is assigned a **priority** and a **work type (Expedite, Fixed Date, Standard, Intangible)**.<br>Items at this stage are not yet ready to start. |
| **2. Ready** | - Verify Definition of Ready (DoR)<br>- Break down tasks (if needed)<br>- Unassigned | Tasks refined to the point where work can begin immediately.<br>Must satisfy DoR criteria (clear requirements, design/resources secured, test conditions defined, etc.).<br>Typically moved from Backlog to Ready during a **Replenishment meeting**. |
| **3. Doing / In Progress** | - Pull work to start<br>- Update in-progress status<br>- Flag blockers | Team members pull tasks from Ready within the WIP limit to begin work.<br>Any **bottlenecks or blockers** encountered during execution are visually flagged on the board (red labels, icons, etc.).<br>Status is shared during the Daily Stand-up. |
| **4. Review (Code Review / Peer Review)** | - Perform code/document review<br>- Incorporate feedback | Completed development work moves to the Review column.<br>Designated reviewers verify code quality and adherence to standards.<br>If review feedback requires changes, the item moves back to Doing or is updated and re-reviewed. |
| **5. Testing / QA** | - Run functional tests<br>- File bug reports and fix defects | QA or team members execute tests.<br>Automated and manual testing can be run in parallel.<br>If defects are found, they are logged on the card, fixed, and re-verified. |
| **6. Done** | - Verify Definition of Done (DoD) compliance<br>- Update documentation/release notes<br>- Complete deployment | All quality criteria are met and deployment is complete.<br>Includes documentation updates such as release notes and user manuals.<br>The completion date is recorded on the card for cycle time analysis. |

---

## Stage-by-Stage Activity Flow Visualization

```
[Backlog]
  ↓ (Replenishment Meeting)
[Ready]
  ↓ (Pull & WIP Check)
[Doing]
  ↓ (Development Complete)
[Review]
  ↓ (Review Approved)
[Testing]
  ↓ (Quality Verification Complete)
[Done]
```

---

## Stage-by-Stage Operational Tips

### 1. Backlog

- **Clarify prioritization criteria**: Base decisions on urgency, business value, deadlines, and risk.
- **Standardize card size**: Split overly large items before moving them to Ready.
- **Prune regularly**: Discard outdated or unnecessary cards.

### 2. Ready

- **Example Definition of Ready (DoR) Checklist**

  - Requirements are clear
  - Design, data, and resources are secured
  - Test conditions are defined
  - Estimated effort and scope are confirmed

### 3. Doing

- Follow the **Stop Starting, Start Finishing** rule.
- Discuss and resolve bottlenecks immediately when they occur.
- Minimize multitasking.

### 4. Review

- Define code review criteria (e.g., code style, performance, security, test coverage).
- Leverage notification systems to reduce review wait times.

### 5. Testing

- Combine automated testing with manual testing.
- When bugs occur, fix and re-verify them on the same card.
- Allow temporary WIP limit exceptions when tests fail, if necessary.

### 6. Done

- Record **cycle time** on the card upon completion.
- Review completed cards during release retrospectives.
- Apply tags (e.g., bug, new feature) for data analysis.

---

## Key Metrics by Stage

| Stage | Key Metrics | Purpose |
| --------------- | ---------------------------- | ------------------------------------- |
| Backlog → Ready | Lead time (request to ready) | Identify causes of preparation delays |
| Ready → Doing | Pull frequency | Assess team throughput capacity |
| Doing | Average WIP, blocker ratio | Manage bottlenecks |
| Review | Review wait time | Balance quality and delivery speed |
| Testing | Defect rate, rework rate | Measure QA efficiency |
| Done | Cycle time, throughput | Improve predictability |

---

Organizing workflows this way clarifies **what a team adopting Scrumban needs to do at each stage**,
while also enabling **metric-driven continuous improvement**.

---
