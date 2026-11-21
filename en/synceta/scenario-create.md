---
title: "Scenario Recording and Editor Guide"
description: "Explains how to capture user events on a web browser in real time and combine wait conditions, assertions, and recovery scripts to build reliable regression test scenarios."
head:
  - - meta
    - name: keywords
      content: SyncETA, scenario recording, browser recorder, wait record, assertion record, DOM validation, AI visual validation, failure recovery script
  - - meta
    - property: og:title
      content: "Scenario Recording and Editor Guide | SyncETA"
  - - meta
    - property: og:description
      content: "A guide to capturing user events, configuring wait/assertion conditions, and editing scenarios."
sort: 300
---

# Scenario Recording and Editor Guide

The SyncETA Editor captures browser interactions (clicks, text input, page navigation, etc.) in real time and structures the DOM metadata (XPath, CSS Selector, tag attributes) at the moment each event occurs to generate test cases.

---

## 1. Definition and Unit of a Scenario

A **Scenario** is a test unit that completes a specific business flow.

Example: `E-Commerce Product Search and Add to Cart`
1. Visit the main homepage
2. Click the search bar and enter a search keyword (`wireless mouse`)
3. Execute the search and load the results list
4. Click the first product and navigate to the product detail page
5. Click the "Add to Cart" button and verify the confirmation modal

---

## 2. Scenario Creation and Recording Procedure

### Step 1: Open the Scenarios Menu
1. Click the **Scenarios** menu in the left sidebar.
2. Click the **New Scenario** button in the upper-right corner to open the recording configuration modal.

![Click New Scenario](../../ko/synceta/image/scenario-create/new_scenario.png)

### Step 2: Configure Target Browser and Resolution
- **Target URL**: Enter the base web address where the test will be performed.
- **Recording Browser**: Select the browser engine to use for recording (Chrome, Edge, etc.).
- **Viewport Resolution**: Set the browser resolution applied during recording (e.g., 1920x1080, 1400x800).

![Pre-Recording Configuration](../../ko/synceta/image/scenario-create/select_option.png)

### Step 3: Configure Event Capture Filters
Specify the event types to capture (clicks, keyboard input, mouse hover, scrolling, etc.). For standard web testing, keep the default recommended settings.

![Allowed Events Configuration](../../ko/synceta/image/scenario-create/allow_event.png)

### Step 4: Record in Real Time
Once recording starts, a dedicated browser window opens. As you interact with the browser following the actual user flow, event records are sequentially collected in the list at the bottom.

![Start Recording](../../ko/synceta/image/scenario-create/start_recording.png)

### Step 5: Verify Captured DOM Information
Each collected record contains the tag, ID, Class, and absolute/relative XPath information of the target DOM node where the event occurred.

![Captured DOM Info](../../ko/synceta/image/scenario-create/select_dom_info.png)

### Step 6: Multi-Tab Interaction Support
When a new tab or popup window opens during recording, tab-switch events are automatically detected so multi-tab scenarios can be recorded seamlessly.

![Multi-Tab Recording](../../ko/synceta/image/scenario-create/new_tap.png)

---

## 3. Adding Wait Conditions

To prevent test flakiness caused by asynchronous network calls (AJAX/Fetch) or UI rendering delays, three types of wait records are supported.

| Wait Type | Description | Recommended Use Case |
| :--- | :--- | :--- |
| **Fixed Timeout** | Pauses execution for a specified duration (in milliseconds). | Waiting for delayed responses from external system APIs |
| **Element Visible (DOM Visible)** | Waits until a specific DOM element is rendered on screen. | Waiting for asynchronous layer popups to load |
| **Value Match** | Waits until the text or attribute of a target element changes to a specific value. | Waiting for processing status (`Completed`) or order number generation |

### How to Add a Fixed Timeout Condition
1. Right-click the record where a wait is needed.
2. Select **Add Wait Condition** -> **Fixed Timeout** and enter the wait duration (ms).

![Right-Click for Fixed Timeout](../../ko/synceta/image/scenario-create/time_wait.png)
![Configure Fixed Timeout](../../ko/synceta/image/scenario-create/time_wait2.png)
![Fixed Timeout Record Created](../../ko/synceta/image/scenario-create/time_wait3.png)

### How to Add an Element Visible Condition
1. Right-click a record and select **Add Wait Condition** -> **Element Visible**.
2. Click the target DOM element directly in the recording browser window to select it.

![Right-Click for DOM Wait](../../ko/synceta/image/scenario-create/dom_wait.png)
![Select Target DOM Element](../../ko/synceta/image/scenario-create/dom_wait2.png)
![DOM Wait Record Created](../../ko/synceta/image/scenario-create/dom_wait3.png)

### How to Add a Value Match Condition
1. Right-click a record and select **Add Wait Condition** -> **Value Match**.
2. Select the target element in the browser and enter the expected matching text.

![Right-Click for Value Match Wait](../../ko/synceta/image/scenario-create/value_wait.png)
![Configure Value Match Wait](../../ko/synceta/image/scenario-create/value_wait2.png)

---

## 4. Adding Assertions

Three types of assertion records are provided to objectively determine whether a test passes or fails.

| Assertion Type | Description |
| :--- | :--- |
| **Element Visibility Assertion** | Verifies that a specific UI component (button, banner, modal, etc.) is properly rendered on screen |
| **Element Value Assertion** | Verifies that the text, price, or status string of a specific element matches the expected value |
| **AI Visual Assertion (Vision AI)** | Verifies visual integrity (layout breakage, occlusion) based on captured browser screenshots |

### Adding Element Visibility and Value Assertions
Right-click a record, choose the desired assertion method from the **Add Assertion** menu, and designate the target element.

![Right-Click for DOM Assertion](../../ko/synceta/image/scenario-create/valid_dom.png)
![Select DOM Assertion Target](../../ko/synceta/image/scenario-create/valid_dom2.png)
![DOM Assertion Record Created](../../ko/synceta/image/scenario-create/valid_dom3.png)

![Right-Click for Value Assertion](../../ko/synceta/image/scenario-create/valid_value.png)
![Configure Value Assertion](../../ko/synceta/image/scenario-create/valid_value2.png)
![Value Assertion Record Created](../../ko/synceta/image/scenario-create/valid_value3.png)

### AI Visual Assertion (Vision AI)
Use this when verifying complex graphics or responsive layout integrity that cannot be checked with text matching alone. When you enter a verification prompt (e.g., "Verify that the search result map area is displayed properly without being obscured"), visual verification is performed during execution based on the captured screen.

![Right-Click for AI Visual Assertion](../../ko/synceta/image/scenario-create/valid_ai.png)
![Enter AI Visual Assertion Prompt](../../ko/synceta/image/scenario-create/valid_ai2.png)

---

## 5. Editing Scenarios and Resuming Recording

You can continue recording additional actions starting from a specific step in an existing scenario.

1. Select the target scenario from the scenario list and click the **Edit** button.
2. Select the reference record from which you want to resume recording.
3. The browser launches, automatically replays up to the reference record, and enters standby mode to record additional user actions.

![Click Edit Scenario](../../ko/synceta/image/scenario-create/edit.png)
![Select Reference Record](../../ko/synceta/image/scenario-create/edit2.png)
![Resume Recording](../../ko/synceta/image/scenario-create/edit3.png)

---

## 6. Additional Features

- **Record Notes (Comments)**: Add notes describing the test purpose and reference details for each step.
  ![Record Notes](../../ko/synceta/image/scenario-create/comment.png)
- **Recovery Script**: Specify an exception-handling JavaScript script to prevent session termination when a specific step fails.
  ![Recovery Script](../../ko/synceta/image/scenario-create/recover.png)
- **Dataset Variable Binding**: Replace hardcoded input text with dataset variables (such as `{{username}}`).
  ![Dataset Variables](../../ko/synceta/image/scenario-create/dataset.png)
- **Delete and Disable Steps**: Delete unnecessary records or temporarily exclude them from execution.
  ![Delete Step](../../ko/synceta/image/scenario-create/delete.png)
  ![Disable Step](../../ko/synceta/image/scenario-create/disable.png)
