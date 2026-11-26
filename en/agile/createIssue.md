---
title: Issue Creation Prompt
description: Practical LLM prompt guide for generating standardized JIRA issue tickets (Summary, Description, Acceptance Criteria) and UI test scenarios automatically.
head:
  - - meta
    - name: keywords
      content: LLM prompt generation, prompt-based issue creation, AI prompt guide, prompt template, AI-assisted development, automated issue creation, LLM prompt guide, sample data generation, UI scenario authoring, test automation tool, automated test scenarios, QA efficiency, software onboarding
  - - meta
    - property: og:title
      content: Issue Creation Prompt Usage Guide
  - - meta
    - property: og:description
      content: Step-by-step guide to creating issues efficiently, including practical examples of LLM prompts, automated sample data/scenario generation, and UI scenario authoring.
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/agile/createIssue
sort: 7000
---

# Prompt

```
I am trying to create a new issue in the issue tracking system for a Playwright-based test automation tool.
Based on the details below, please draft it in the **JIRA Ticket Template** format.

Requirements:
1. Generate an issue **Title**
2. Format using the **JIRA Ticket Template**:
  - Summary
  - Description
  - Acceptance Criteria
  - Priority
3. Include example **UI Scenarios** that developers can reference during implementation

Issue Details:
{{Issue Details}}
```

# Sample

```
I am trying to create a new issue in the issue tracking system for a Playwright-based test automation tool.
Based on the details below, please draft it in the **JIRA Ticket Template** format.

Requirements:
1. Generate an issue **Title**
2. Format using the **JIRA Ticket Template**:
   - Summary
   - Description
   - Acceptance Criteria
   - Priority
3. Include example **UI Scenarios** that developers can reference during implementation

Issue Details:
 Add a sample data generation feature (similar to DBeaver) upon first login
```

# Edit the Output as Needed Before Registering the Issue

```
## JIRA Ticket Example

**Title**
Add Automatic Sample Data and Sample Project/Scenario Generation on First Login

**Summary**
Add a feature that generates a sample project and sample scenarios when a new user logs in for the first time without any existing projects, improving the initial tool experience and enabling faster onboarding.

**Description**
Currently, in the Playwright-based test automation tool, new users see only an empty screen on first login if no projects or scenarios exist.
To improve this experience, implement the following functionality:

1. On first login, if no projects exist, display a **confirmation dialog asking whether to generate samples**:

   * "Would you like to create a sample project and sample scenarios?"
2. If the user agrees, **automatically generate a sample project and sample scenarios**.
3. The generated sample project and scenarios must be visible in the UI and immediately runnable.

**Acceptance Criteria**

* [ ] Display a confirmation dialog when no projects exist on first login
* [ ] Automatically generate a sample project and sample scenarios when the user selects "Yes"
* [ ] Display the sample project in the UI project list
* [ ] Verify that the sample scenarios are executable and run as expected
* [ ] Do not generate anything when the user selects "No"
* [ ] Trigger this logic only on the user's initial login

**Priority**
Medium

**Labels**

* playwright
* onboarding
* enhancement

**Expected Benefits**

* Provide **immediately runnable samples** for new users
* Enable users to **intuitively understand** how to use the tool
* **Improve UX** by providing default sample data instead of an empty screen

---

## UI Scenario Examples

**Sample Project Name:** `Sample Project`

1. **Sample Scenario 1: Web Login Test**

   * Step 1: Open browser
   * Step 2: Navigate to URL (`https://example.com/login`)
   * Step 3: Enter ID (`test_user`)
   * Step 4: Enter PW (`password123`)
   * Step 5: Click Login button
   * Step 6: Verify "Login successful" message

2. **Sample Scenario 2: API Call Test**

   * Step 1: Call `GET /api/health`
   * Step 2: Verify response status code is 200
   * Step 3: Verify `"status": "ok"` in the response JSON

3. **Sample Scenario 3: Basic UI Verification Test**

   * Step 1: Navigate to the main page
   * Step 2: Verify the logo image is displayed on screen
   * Step 3: Click a primary navigation button and verify page transition
```
