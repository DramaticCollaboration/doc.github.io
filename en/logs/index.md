---
title: "Engineering Work Logs and Post-Mortems (Logs)"
description: "Archive of practical engineering records covering technical challenges, root cause analysis (RCA), memory tuning, and performance optimization across the development, deployment, and operation of the SyncSeries product suite."
head:
  - - meta
    - name: keywords
      content: Work Logs, Post-Mortem, Troubleshooting, Memory Leak, Electron, Playwright, Redis Distributed Lock, MyBatis-Plus, Code Signing, Empasy
  - - meta
    - property: og:title
      content: "Engineering Work Logs and Post-Mortems | Empasy"
  - - meta
    - property: og:description
      content: "Technical logs documenting real-world production incident analyses and engineering problem-solving processes."
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/logs/
sort: 1
---

# Engineering Work Logs and Post-Mortems (Logs)

This section is a practical engineering log where the Empasy engineering team traces and resolves the root causes of **technical incidents, memory leaks, concurrency bottlenecks, and build signing errors** encountered in production environments and release build pipelines.

Beyond simple task lists, each entry is structured in a standardized post-mortem format: **Reproduction Environment -> Root Cause Analysis (RCA) -> Fix Verification -> Recurrence Prevention**.

---

## Work Logs and Post-Mortems

### 1. SyncETA (Desktop App & QA Engine)
- **[2026-02-10: Electron Multi-Webview DOM Snapshot Memory Leak Analysis and Fix](./20260210_electron_webview_memory_leak)**: Identifying the root cause of renderer process V8 heap exhaustion when recording 50+ consecutive scenarios and optimizing memory release.
- **[2026-02-18: Stabilizing Playwright Action Timeouts for Lazy-Loaded Components](./20260218_playwright_dynamic_timeout_stabilization)**: Improving virtual scroll anchor wait mechanisms under infinite scroll and lazy-mount environments.
- **[2026-03-10: Building an Unattended Windows Authenticode Signing and Apple Notarization Pipeline](./20260310_desktop_codesign_notarization_pipeline)**: GitHub Actions runner-based EV certificate code signing and macOS Gatekeeper pass-through pipeline.
- **[2025-08-27: Desktop Debug Crash Analysis](./20250827_debugCrash)**: Troubleshooting Linux inotify file watcher limit exceeded (`ENOSPC: System limit for number of file watchers reached`).
- **[2025-08-27: Electron Development Environment Debugging Log](./20250827_electronDebug)**: Guide for connecting the IntelliJ Electron main process remote debugger (`ws://127.0.0.1:5858`) and configuring breakpoints.

### 2. SyncVerse & SyncBoot (Control Plane & MSA Backend)
- **[2026-02-25: Multi-Agent Transaction Synchronization Incident Recovery Based on Redis Redlock and SSE](./20260225_redis_redlock_sse_saga_orchestration)**: Resolving distributed lock lease renewal failures and Saga rollback synchronization issues during network partitions.
- **[2026-03-02: Fixing MyBatis-Plus Async Thread Tenant ID Loss in Multi-Tenant Environments](./20260302_mybatis_metaobject_tenant_context_fix)**: Replacing `ThreadLocal`-based tenant context with `ScopedValue` to resolve missing propagation across virtual thread pools.

---

## Engineering Post-Mortem Principles

1. **Blameless Post-Mortem**: Focus on system architecture and process weaknesses to turn failures into organizational assets.
2. **Metric-Driven Timeline Recording**: Explicitly record the timeline covering incident occurrence (T0), detection (T1), mitigation (T2), and full resolution (T3).
3. **Code-Level Diff Documentation**: Include before/after source code diffs so subsequent engineers can reference fixes immediately.

---

## Incident Severity and Response Timeline Summary Matrix

| Log ID | Target Product | Core Technical Area | Pre-Fix Symptom | Post-Fix Quantitative Improvement |
| :--- | :--- | :--- | :--- | :--- |
| **`20260210`** | `SyncETA` | Electron Webview / V8 Heap | Renderer OOM crash after 50 consecutive recordings | **68% reduction** in memory usage; 500 consecutive recordings with zero failures |
| **`20260218`** | `SyncETA` | Playwright / Virtual Scroll | Intermittent timeouts on lazy-mounted grids | Dynamic timeout stabilization achieved **under 0.2%** flaky failure rate |
| **`20260225`** | `SyncVerse` | Redis Redlock / SSE Saga | Missed distributed lock renewals during brief network drops | Watchdog auto-extension and compensating rollback consistency **pre-verified** |
| **`20260302`** | `SyncBoot` | Java 25 Virtual Threads | `ThreadLocal` tenant loss during async tasks | Transition to `ScopedValue` achieved **0** multi-tenant isolation leaks |
| **`20260310`** | `SyncETA` | Windows EV / macOS Notarization | Manual code signing took 2 hours per release | Unattended GitHub Actions signing & notarization pipeline completes **within 12 minutes** |
| **`20250827-A`** | `SyncETA` | Linux `inotify` Watcher | Process terminated with `ENOSPC` while running dev server | Standardized permanent tuning at `fs.inotify.max_user_watches=524288` |
| **`20250827-B`** | `SyncETA` | IntelliJ / V8 Inspector | Breakpoints not hitting in Electron main process | Established direct remote debugger socket procedure at `ws://127.0.0.1:5858` |
