---
title: "SyncETA Quickstart Guide"
description: "A quickstart guide to installing the SyncETA desktop application (1 minute) or running the Docker on-premises server to record and execute your first scenario."
head:
  - - meta
    - name: keywords
      content: SyncETA quickstart, getting started with test automation, desktop app download, Playwright testing, record and run, Docker deployment
  - - meta
    - property: og:title
      content: "SyncETA Quickstart Guide | Empasy"
  - - meta
    - property: og:description
      content: "Run your first web regression test in 3 minutes by installing the desktop app or deploying with Docker."
sort: 30
---

# SyncETA Quickstart Guide

There are two ways to get started with SyncETA. Choose **[Method 1: Quick Desktop App Installation]** if you want to try testing rapidly in a local or staging environment, or **[Method 2: Docker-Based On-Premises Deployment]** if you need centralized team governance and a CI/CD-integrated server.

---

## Method 1: Quick Desktop App Installation (Recommended - Start in 1 Minute)

The desktop app runs immediately upon executing the OS-specific installer, without requiring separate server setup or database configuration.

### Step 1: Download the Installer
Download the latest stable build (v0.0.44) for your operating system from the [Empasy Official Download Page (empasy.io)](https://empasy.io/en/download_eta.html).

- **Windows**: `SyncETA Setup 0.0.44.exe` (supports x64 and arm64)
- **macOS**: `SyncETA-0.0.44-arm64.dmg` (Apple Silicon M-series) or `SyncETA-0.0.44.dmg` (Intel)

### Step 2: Launch the Application
Once installation is complete, launch **SyncETA** from your desktop or applications list. It starts immediately in local mode without requiring separate login or external network authentication.

---

## Method 2: Docker Compose-Based On-Premises Deployment (Enterprise)

Deploy the SyncETA central server and Playwright distributed execution nodes onto your internal infrastructure.

```bash
# Clone the repository and navigate to the directory
git clone https://github.com/DramaticCollaboration/SyncSeries.git
cd SyncSeries/sync-eta

# Start container services in detached mode
docker compose -f docker-compose.dev.yml up -d
```

After the services start, open `http://localhost:9000` in your browser to access the web console.

---

## Hands-On: Record and Run Your First Test Scenario

After launching the desktop app or web console, follow the 4 steps below to create and execute your first regression test.

### Step 1: Create a Project and Register a Base URL
1. Click **Projects** in the left navigation bar.
2. Click the **New Project** button in the upper-right corner and enter a project name (e.g., `Commerce Main Flow`) and a start URL (e.g., `https://shop.example.com` or `http://localhost:3000`).

### Step 2: Record User Interactions
1. From the left menu, select **Scenarios** -> **New Scenario**.
2. Specify the target browser (Chromium) and viewport (1920x1080), then click **Start Recording**.
3. Perform user actions in the launched browser window:
   - Click the search bar and enter a search keyword
   - Click the search submit button
   - Click a specific item from the search results list
4. Click **Stop Recording** in the recording control window. The scenario is automatically normalized into JSON/YAML format and saved.

### Step 3: Add Assertions
1. Select the final step you want to verify in the saved scenario editor.
2. Select **Add Assertion** -> **Element Visibility Assertion**, and designate the target component on the screen (e.g., the "Details" section or "Checkout Button").

### Step 4: Unattended Playwright Execution and Self-Healing Verification
1. Click **Run Scenario** in the upper-right corner.
2. Choose an execution mode (Headless or Normal Browser) and click **Run**.
3. Once execution completes, review each step's pass/fail status, elapsed time, captured screenshots, and applied Self-Healing records on the dashboard.

---

## Next Steps

- [Scenario Recording and Editor Guide](./scenario-create) - Configuring wait conditions and recovery scripts
- [Visual Regression Verification and Selector Self-Healing](./self-healing-and-vision) - Vision-LLM-based selector recovery mechanism
- [Dataset Management](./dataset) - Large-scale parameterized testing using Excel
- [MCP Protocol and CI/CD Integration](./mcp-and-cicd) - GitHub Actions and Jenkins pipeline integration
