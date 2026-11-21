---
title: Story Points
description: "Story points are a relative unit for estimating the size, complexity, and uncertainty of work. They do not map directly to absolute time and are designed to help gauge reasonable sprint workloads and estimate team schedules."
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
      content: https://doc.empasy.com/en/agile/storyPointGuide
sort: 2000
---

# Story Point Guide: How Agile Teams Estimate Work

## What Are Story Points?

Story points are a unit for relatively estimating the **size, complexity, and uncertainty** of work. They do not map directly to absolute time and are intended to help gauge reasonable sprint workloads and estimate team schedules.

> The approach that "5 points = 5 times the hours of 1 point" is incorrect.

## Why Use the Fibonacci Sequence?

Story point estimation commonly uses a Fibonacci-like sequence such as **1, 2, 3, 5, 8, 13, 21...**. The reasons for using this non-consecutive sequence are:

- The widening intervals reflect growing uncertainty
- The difference between 5 and 8 is clearer than between 5 and 6
- It reflects that complexity and risk grow exponentially as tasks get larger
- As a result, team consensus becomes easier and over- or under-estimation is reduced

## Story Point Usage Examples

| Task Item | Points | Description |
| :--- | :--- | :--- |
| User Research | 3 points | Work requiring relatively light effort |
| Wireframing | 5 points | Straightforward work conducted after user research |
| UI Design | 8 points | Work requiring alignment within the team |
| Development Work | 13 points | Complex work involving many interacting components |
| QA Testing | 8 points | Complex but manageable level of work |

## Reference Task Examples

### Story Points 5: User Password Reset Feature

**Definition of Done**

- Implement password change functionality
- Implement email verification functionality
- Enforce password rules (alphanumeric, etc.)

**Additional Considerations**

- Database table design
- Email sending/receiving environment
- Edge-case exceptions do not need to be considered

### Story Points 13: Credit Card Payment Feature

**Definition of Done**

- Implement product payment functionality
- Enable viewing purchase history on My Page
- Enable administrator visibility as well

**Additional Considerations**

- Card registration functionality already exists
- Database design required
- Error patterns do not need to be considered

## Caution: Incorrect Usage

**Avoid mapping directly to hours**

- "A 4-hour task = 1 point" → no different from traditional time-based estimation
- "5 points = 5 times the hours of 1 point"

**Correct meaning**: It means the task is 5 times more complex than a 1-point task. Equating points to hours undermines the core purpose of story points.

## Refactoring and Quality Considerations

Every story must include both of the following elements:

1. Functionality that **works properly**
2. Quality that **works the right way**

Satisfying only the first element while ignoring the second leaves the story points incomplete. Refactoring work can also be assigned points from the perspective of improving quality (eliminating technical debt).

> Caution: Never use story points to compare individual performance. They are strictly a team-level tool.

## Key Takeaways

- Story points are a **relative estimation unit**
- The goal is **comparing complexity and uncertainty**, not converting to hours
- Using the Fibonacci sequence accounts for higher risk in larger tasks
- Establish team reference baselines (such as 3, 5, 8, and 13) and estimate new work by comparing against them
- Avoid incorrect time-mapping practices and always factor in quality standards

---

# Story Point Estimation Meeting Guide

## Meeting Agenda

### Opening (5 minutes)

- Explain the meeting goal: relatively estimate the difficulty and complexity of work for the upcoming sprint
- Emphasize reaching consensus through relative size comparison rather than absolute time units

### Basic Concept Reminder (10 minutes)

- Definition of story points: a unit representing the size, complexity, and uncertainty of work
- Do not map 1:1 to hours ("5 points = 5 times the hours of 1 point")
- Explain why the Fibonacci sequence is used (1, 2, 3, 5, 8, 13, 21...)

### Sharing Reference Examples (10 minutes)

- Share story point examples (User Research → 3, Wireframing → 5, etc.)
- Review concrete reference tasks (5 points: Password Reset, 13 points: Credit Card Payment)

### Caution Against Incorrect Usage (5 minutes)

- Emphasize not substituting hours directly
- "5 points = 5 times the hours of 1 point"
- Correct interpretation: "5 times more complex than 1 point"

### Refactoring and Quality Considerations (10 minutes)

- Every story must include [1] working functionality + [2] working the right way (quality)
- Assign points to refactoring and technical debt reduction as appropriate
- Reiterate that story points are not for comparing individual performance

### Actual Work Estimation (30–40 minutes)

- Review backlog items one by one
- Discuss by comparing against reference examples
- Team consensus → select a Fibonacci number (e.g., 3, 5, 8, 13)
- Work toward consensus when issues or differing opinions arise

### Wrap-Up (5 minutes)

- Summarize the story point estimates decided during the meeting
- Announce that they will be incorporated into the next sprint plan
- Reiterate that "story points are a tool to help the team estimate schedules quickly and easily"

Story points are a valuable tool for team productivity and schedule management, but they deliver their true value only when understood and applied properly.
