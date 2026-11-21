---
title: Empasy Agile Process and Engineering Portal
description: "An enterprise Agile engineering portal standardizing daily team collaboration, Scrumban operations, recurring ceremonies, Git Flow branching strategy, commit log conventions, and issue management principles for Empasy engineering teams."
head:
  - - meta
    - name: keywords
      content: Empasy Agile, Scrumban, Git Flow, Git commit convention, Daily Scrum, Story Point, issue management, Sprint, Empasy
  - - meta
    - property: og:title
      content: Empasy Agile Process and Engineering Portal
  - - meta
    - property: og:description
      content: Empasy standard Agile guidelines for maximizing sprint team execution and engineering code quality
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/agile/
sort: 200
---

# Empasy Agile Process and Engineering Portal

The **Empasy Agile & Engineering Process** is the **day-to-day software engineering standard and collaboration culture guide** that governs how engineering teams communicate daily, write code, manage configuration, and track issues in project delivery.

This portal breaks down the WBS milestones established in the macro-level business management and delivery framework ([Empasy Business and Development Methodology](/en/methodology/)) into 1–2 week sprints for delivery teams, enabling them to achieve **bottleneck-free workflow (Flow)** and **strict code quality (Quality Gate)**.

---

## 1. Three Core Pillars of Empasy Agile Engineering

```mermaid
flowchart LR
    subgraph AgilePillars ["3 Core Pillars of Empasy Agile"]
        A1["1. Scrumban Operations<br/>(Process & Cadence)"]
        A2["2. Engineering & Configuration Management<br/>(Engineering Workflow)"]
        A3["3. Framework & Terminology<br/>(Framework & Terms)"]
    end
```

### 1) Scrumban Operations Framework
Combines Scrum's planning structure (roles, backlog, retrospectives) with Kanban's flexibility (WIP limits, pull system) to minimize bottlenecks in enterprise environments where urgent operational tasks and new feature development coexist.
* **[Scrumban Hybrid Operations Overview](./scrumban.md)**: Differences between Scrum and Kanban, pull-based execution, board layout
* **[Scrumban Practical Guide](./guide.md)**: Board column setup, criteria for setting WIP (Work in Progress) limits
* **[Regular Activities and Ceremonies](./activity.md)**: Sprint planning, backlog replenishment, sprint review, and retrospective
* **[Daily Scrum Guide](./dailyScrum.md)**: Running a 15-minute stand-up meeting, the three standard questions
* **[Story Point Estimation Guide](./storyPointGuide.md)**: Fibonacci-based effort estimation and planning poker
* **[Sprint Operations Checklist](./checklistAndProcedure.md)**: Essential pre-sprint and post-sprint verification checklists

---

### 2) Engineering & Configuration Management Workflow
All engineers follow consistent branching strategies, commit conventions, and issue lifecycles to maximize code traceability and maintainability.
* **[Git Flow Branching Strategy](./gitFlow.md)**: Standard operating rules for `main`, `develop`, `feature/*`, `release/*`, and `hotfix/*`
* **[Git Commit Log Convention](./gitCommitLog.md)**: Standards for `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, and `chore:` prefixes and commit message bodies
* **[Issue Creation Rules and Templates](./createIssue.md)**: Templates and labeling rules for bug reports, new features, and work tasks
* **[Issue Lifecycle Management Principles](./PrinciplesForIssueUsage.md)**: State transition rules for Todo -> In Progress -> Review -> Done

---

### 3) Framework Comparison and Standard Glossary
* **[Methodology Comparison Analysis (XP vs Scrum vs Kanban)](./xp_scrum_kanban.md)**: Detailed comparison of Extreme Programming, Scrum, Kanban, and Scrumban, along with best-fit project types
* **[Agile and Engineering Glossary](./glossaryOfTerms.md)**: Essential terms including Burndown Chart, WIP, Velocity, Definition of Ready (DoR), and Definition of Done (DoD)

---

## 2. Integration with Macro-Level Business Methodology

Empasy's software ecosystem operates through tight synchronization between **macro-level business management** and **micro-level Agile execution**.

```mermaid
flowchart TD
    M1["Empasy Business & Development Methodology (/en/methodology/)<br/>- Oversees end-to-end Phase 0–5 lifecycle<br/>- Client contracts, advance/milestone/final payments<br/>- Manages 4 official sign-offs<br/>- Delivers 125 unified standard deliverables"]
    
    A1["Empasy Agile Process (/en/agile/)<br/>- Breaks work into 1–2 week sprints<br/>- Operates Scrumban boards & WIP limits<br/>- Enforces Git Flow branching & commit conventions<br/>- Conducts Daily Scrum & code reviews"]

    M1 -->|"Delivers WBS milestones & requirements (SRS)"| A1
    A1 -->|"Delivers sprint-completed features & release artifacts"| M1
```

* **Contracting & awards, 4 official sign-offs, 125 official deliverables, and AI-SDLC**: See the **[Empasy Business and Development Methodology Portal](/en/methodology/)**.
* **Daily engineering collaboration, source control, and sprint operations**: Follow this **Agile Process** guide.
