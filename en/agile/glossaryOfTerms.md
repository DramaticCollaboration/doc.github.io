---
title: Scrumban Glossary
description: "Comprehensive glossary of Scrumban and Agile terms including WIP limits, lead time, cycle time, backlog refinement, and burndown metrics."
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
      content: https://doc.empasy.com/en/agile/glossaryOfTerms
sort: 1000
---

## Scrumban Glossary

| Category | Term | Abbreviation | Description |
| --- | --- | --- | --- |
| Core Concepts | Scrumban | - | An Agile project management framework combining the strengths of Scrum and Kanban |
| Core Concepts | Scrum | - | An Agile development methodology centered on iterations and sprints |
| Core Concepts | Kanban | - | A project management technique that visualizes workflow and limits Work in Progress (WIP) |
| Core Concepts | Agile | - | A set of philosophies and methodologies for developing products in a flexible, iterative manner |
| Work Units | Work Item | - | A concrete unit of work that the team needs to perform |
| Work Units | User Story | - | A work unit expressing a user requirement in the form of a concise story |
| Work Units | Task | - | A granular execution item broken down from a User Story or Work Item |
| Board Structure | Backlog | - | A list of all work items that have not yet been started |
| Board Structure | Ready | - | The status of work items that are fully prepared to begin |
| Board Structure | In Progress | - | The status of work currently underway |
| Board Structure | Review | - | The status of completed work awaiting quality review |
| Board Structure | Done | - | The status of work that has passed all reviews and is ready for deployment |
| Operating Rules | Work In Progress Limit | WIP | The maximum number of work items allowed to be in progress simultaneously |
| Operating Rules | Lead Time | - | The total elapsed time from when a work request is created until it is completed |
| Operating Rules | Cycle Time | - | The elapsed time from when work begins until it is completed |
| Operating Rules | Flow Efficiency | - | The ratio of active working time to total work elapsed time |
| Events | Daily Stand-up | - | A brief daily team meeting to share progress and blockers |
| Events | Sprint Planning Meeting | - | A meeting to plan the work to be performed in the upcoming sprint |
| Events | Review Meeting | - | A meeting to inspect completed work and gather feedback |
| Events | Retrospective | - | A recurring team meeting held to improve processes |
| Metrics | Burndown Chart | - | A chart visualizing remaining work over time |
| Metrics | Cumulative Flow Diagram | CFD | A chart visualizing cumulative item counts by work status to identify bottlenecks |
| Quality Standards | Definition of Ready | DoR | Minimum specification and acceptance criteria a backlog item must meet before entering development |
| Quality Standards | Definition of Done | DoD | Build, QA, and documentation criteria a story or task must pass to be accepted as `Done` |
| Estimation Techniques | Story Point | SP | An estimation unit representing relative size, complexity, and uncertainty using scales such as the Fibonacci sequence |
| Estimation Techniques | Velocity | - | The sum of Story Points completed (`Done`) by a team during a single sprint |
| Flow Control | Pull System | - | A flow control method in which the next task is pulled and started only when available capacity (WIP headroom) opens up |
| Flow Control | Blocker | - | A bottleneck factor halting work progress due to external dependencies or technical impediments |

---

## Relationship Among Core Flow Metrics (Little's Law)

In Scrumban operations, lead time is shortened by managing the relationship between Work in Progress (WIP), Throughput, and Cycle Time as follows:

\[
\text{Average Cycle Time} = \frac{\text{Average WIP (Work in Progress)}}{\text{Average Throughput (Completed Items per Unit Period)}}
\]

- **Effect of WIP Limits**: Reducing concurrent work (WIP) lowers context-switching overhead, shortening the completion time (Cycle Time) of individual items and reducing quality defects.
