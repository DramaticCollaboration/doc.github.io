---
title: "Troubleshooting Linux Electron Debug Crash (ENOSPC inotify Watcher Limit Exceeded)"
description: "Root cause analysis and permanent sysctl tuning guide for ENOSPC (System limit for number of file watchers reached) kernel inotify limit errors when debugging Electron applications on Linux."
head:
  - - meta
    - name: keywords
      content: SyncETA, Electron, Linux, ENOSPC, inotify, max_user_watches, max_user_instances, chokidar, debugging, troubleshooting
  - - meta
    - property: og:title
      content: "Troubleshooting Linux Electron Debug Crash (ENOSPC inotify Watcher Limit Exceeded) | Empasy Docs"
  - - meta
    - property: og:description
      content: "Guide to resolving Electron dev server crashes by increasing the Linux kernel fs.inotify.max_user_watches limit or falling back to CHOKIDAR_USEPOLLING."
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/logs/20250827_debugCrash
sort: 400
---

# Troubleshooting Linux Electron Debug Crash (`ENOSPC: System limit for number of file watchers reached`)

## 1. Symptoms and Root Cause Analysis (RCA)

When running the SyncETA Electron application in debug mode (`yarn dev:debug`) in a Linux desktop development environment, the Vite/Chokidar file watcher monitors file descriptors inside `node_modules` and workspace subdirectories. This exceeds the Linux kernel's default `inotify` watcher limit (`8192` or `65536`), causing the process to terminate abnormally with an `ENOSPC: System limit for number of file watchers reached` exception.

---

## 2. Solution 1: Increase the Linux Kernel `inotify` Watcher Limit (Recommended)

### 2.1 Check Current Kernel Values

```bash
cat /proc/sys/fs/inotify/max_user_watches
cat /proc/sys/fs/inotify/max_user_instances
```

### 2.2 Apply Immediately at Runtime (Temporary)

```bash
sudo sysctl fs.inotify.max_user_watches=524288
sudo sysctl fs.inotify.max_user_instances=1024
```

### 2.3 Apply Permanently (`/etc/sysctl.d/99-inotify.conf`)

Register a `sysctl.d` configuration file so that the settings persist across system reboots.

```bash
echo 'fs.inotify.max_user_watches=524288' | sudo tee /etc/sysctl.d/99-inotify.conf
echo 'fs.inotify.max_user_instances=1024' | sudo tee -a /etc/sysctl.d/99-inotify.conf
sudo sysctl -p /etc/sysctl.d/99-inotify.conf
```

After applying the configuration, re-run `yarn dev:debug` to verify normal startup.

---

## 3. Solution 2: Switch to Polling Mode When Kernel Parameters Cannot Be Modified (Containers / Restricted Environments)

In CI container environments without `sudo` privileges or where modifying kernel parameters is restricted, enable polling mode instead of relying on filesystem events.

### 3.1 One-Time Environment Variable Execution

```bash
CHOKIDAR_USEPOLLING=1 CHOKIDAR_INTERVAL=800 yarn dev:debug
```

### 3.2 Register in IDE Run/Debug Configuration

You can apply these settings permanently in IntelliJ IDEA by adding the following variables under **Run/Debug Configurations -> Environment variables**:

| Environment Variable Key | Recommended Value | Description |
| :--- | :--- | :--- |
| `CHOKIDAR_USEPOLLING` | `1` | Enables periodic file state polling instead of OS kernel `inotify` |
| `CHOKIDAR_INTERVAL` | `800` | File change detection polling interval (in `ms`, minimizing CPU overhead) |
