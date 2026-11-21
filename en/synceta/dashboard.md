---
title: "Dashboard and Result Analysis Guide"
description: "Guide to monitoring test execution statistics, synchronized playback of failure-point DOM snapshots and MP4 recordings, console error collection, and SSL certificate monitoring."
head:
  - - meta
    - name: keywords
      content: SyncETA, Dashboard, Test Report, Error Video Playback, DOM Snapshot, Console Error Collection, SSL Certificate Monitoring
  - - meta
    - property: og:title
      content: "Dashboard and Result Analysis Guide | SyncETA"
  - - meta
    - property: og:description
      content: "Guide to analyzing SyncETA test execution statistics, playing failure-point videos, and diagnosing DOM states."
sort: 800
---

# Dashboard and Result Analysis Guide

The SyncETA dashboard provides a centralized monitoring interface where you can review overall project test pass rates and pinpoint failure causes at a glance.

---

## 1. Execution Statistics and Trend Analysis

You can filter by execution period and test execution type (**`Batch`**, **`Manual`**) to inspect comprehensive quality metrics.

![Dashboard main view](../../ko/synceta/image/dashboard/main.png)

### Key Monitoring Metrics
- **Total Executions (`Total`)**: Cumulative pass and failure counts for scenarios and records filtered by the selected period and execution type (`Batch`/`Manual`)
- **Pass Rate by Priority (`Priority High`)**: Focused monitoring of execution pass/failure counts and pass rates for high-priority core business scenarios
- **Assertion Pass Rate**: Step-by-step verification match rate across assertions (DOM, value, and Vision)

![Execution statistics cards](../../ko/synceta/image/dashboard/total.png)

---

## 2. Failure-Point Diagnostics and Synchronized Video Playback

Click a failed test case to inspect the exact browser state at the moment the error occurred.

![Execution result details](../../ko/synceta/image/dashboard/row_detail.png)

### Timeline-Synchronized Video Playback
The recorded execution video is synchronized with the step-by-step record timeline. Clicking any record immediately jumps the video to the exact moment that action was performed.

![Synchronized video playback](../../ko/synceta/image/dashboard/auto_play.png)
![Video timeline focus](../../ko/synceta/image/dashboard/auto_play2.png)
![Multi-tab video inspection](../../ko/synceta/image/dashboard/open1111.png)

### Jump to Error Record Location
Clicking an error log automatically scrolls the view to the exact record in the list that triggered the error.

![Scroll to error record](../../ko/synceta/image/dashboard/move.png)
![Jump to error timestamp in video](../../ko/synceta/image/dashboard/move_video.png)

---

## 3. Team Collaboration and Comments

Add issue comments directly to specific steps in a test result and mention teammates (`@username`) to share defects and collaborate quickly.

![Write a comment](../../ko/synceta/image/dashboard/comment.png)
![Check mention notifications](../../ko/synceta/image/dashboard/mention.png)

---

## 4. Automatically Collected Diagnostic Data

During test execution, SyncETA automatically captures supplementary diagnostic telemetry at both the browser and infrastructure levels.

| Collected Item | Description |
| :--- | :--- |
| **DOM Hierarchy Snapshot** | Preserves the full DOM tree and node attributes at the time each event occurred |
| **Browser Console Errors** | Automatically collects JavaScript runtime errors and warnings logged to the webpage console during execution |
| **SSL Certificate Expiration** | Checks the SSL/TLS certificate validity period for the target service domain and alerts on upcoming expirations |

![DOM snapshot details](../../ko/synceta/image/dashboard/select_dom.png)
![Console error collection](../../ko/synceta/image/dashboard/console_err.png)
![SSL certificate check](../../ko/synceta/image/dashboard/ssl.png)
