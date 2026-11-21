---
title: "SyncAdmin: Vue 3 Back-Office Framework Optimized for AI Integration"
description: An intelligent admin dashboard template built on Vue 3, Vite, and TypeScript. Supports enterprise system development through AI agent monitoring, dynamic data visualization, and granular permission management.
head:
  - - meta
    - name: keywords
      content: SyncAdmin, Vue 3, Vite, TypeScript, admin system template, back-office development, admin dashboard, frontend development, AI dashboard, enterprise system, Pinia, i18n, permission management, theme customization, UI framework, ERP system, CRM system, data visualization, Empasy, SyncSeries
  - - meta
    - property: og:title
      content: "SyncAdmin: Vue 3 Back-Office Framework Optimized for AI Integration"
  - - meta
    - property: og:description
      content: An intelligent admin dashboard template built on Vue 3, Vite, and TypeScript.
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/syncadmin/
order: 1
dir:
  order: 3
---

# SyncAdmin: Frontend Standard for Intelligent Back-Office Systems (Archive)

> [!NOTE]
> **Enterprise Frontend Standard Consolidation Notice**: The design assets and component system of `SyncAdmin` have been fully internalized into the **`admin/` (Vue 3 + Vben Admin + DB Single-Source Dynamic Routing)** standard frontend architecture across the 11 SyncSeries enterprise products (`SyncVerse`, `SyncInsight`, `SyncLLM`, `SyncAPIM`, `SyncWatch`, `SyncBoot`, `SyncCMS`, `SyncShop`, `SyncOps`, `SyncETA`, `SyncCrawl`).

SyncAdmin is an enterprise management system frontend standard designed on Vue 3, Vite, and TypeScript. Beyond a simple data CRUD interface, it integrates organically with the 11 SyncSeries AI agents (`SyncVerse`, `SyncInsight`, `SyncLLM`, `SyncAPIM`, `SyncWatch`, `SyncBoot`, `SyncCMS`, `SyncShop`, `SyncOps`, `SyncETA`, `SyncCrawl`) to provide an intelligent dashboard environment capable of monitoring and controlling system status.

## 1. AI-Friendly Frontend Architecture

Built on a modern web technology stack, it features a structure optimized for data-driven decision-making and AI model integration.

- **Modern Tech Stack**: Delivers fast, lightweight rendering performance based on Vue 3 (Composition API), Vite, and Pinia, displaying large volumes of log data and AI analysis results on screen without latency.
- **Dynamic UI Composition**: Includes built-in reusable components that respond flexibly to construct layouts even when data structures change or AI agents return new formats of analysis results.
- **Monorepo-Based Management**: Uses pnpm and Turborepo to efficiently manage code across large-scale projects and complex systems combining multiple AI services.

## 2. Core Operations and Management Features

Provides essential enterprise management capabilities out of the box to accelerate development speed.

- **Intelligent Access Control & DB Dynamic Routing**: Beyond simple page-level access control, it natively supports `PermissionModeEnum.BACK` dynamic routing from a database Single Source of Truth (`sys_permission`, `sys_role_permission`) and granular button-level permissions (RBAC).
- **Zero-Mock Real-Data Integration**: Integrates transparently 1:1 with backend enterprise-standard Canonical URLs (`/api/v1/{product}/...`) without hardcoded dummy data, and delivers a consistent enterprise UI through high-level standard components (`BasicTable`, `BasicModal`, `BasicForm`, `BasicDrawer`).
- **Multilingual & Theme Support**: Natively supports multilingual environments via an internationalization (i18n) module, and seamlessly provides theme customization and dark mode aligned with corporate brand guidelines.

## 3. Adoption and Use Cases

SyncAdmin integrates and provides all UI assets required to build internal systems, serving as the foundation for a wide range of B2B solutions.

- **Unified Control Dashboard**: Serves as a control center that visualizes AI agent activity logs, status, and data collection progress in real time.
- **Enterprise Core Solutions**: Significantly reduces development time for systems requiring complex business logic and numerous input forms, such as ERP, CRM, and HR management.
- **Data Analytics Views**: Supports diverse UI frameworks (such as Ant Design Vue) and charting libraries, making it easy to build report views where data can be understood intuitively.

---

## 4. Enterprise 11-Product Frontend (`admin/`) Standard Mapping Status

The frontend package and dynamic permission API mapping specifications for the 11 enterprise products in which the `SyncAdmin` architecture is currently internalized are as follows:

| Product | Frontend Package Name (`package.json`) | Routing Mode | Dynamic Menu & Permission Authorization Canonical API |
| :--- | :--- | :---: | :--- |
| **SyncVerse** | `@empasy/sync-verse-admin` | `BACK` | `/api/v1/verse/sys/permission/getUserPermissionByToken` |
| **SyncInsight** | `@empasy/sync-insight-admin` | `BACK` | `/api/v1/insight/sys/permission/getUserPermissionByToken` |
| **SyncLLM** | `@empasy/sync-llm-admin` | `BACK` | `/api/v1/llm/sys/permission/getUserPermissionByToken` |
| **SyncAPIM** | `@empasy/sync-apim-admin` | `BACK` | `/api/v1/apim/sys/permission/getUserPermissionByToken` |
| **SyncWatch** | `@empasy/sync-watch-admin` | `BACK` | `/api/v1/watch/sys/permission/getUserPermissionByToken` |
| **SyncBoot** | `@empasy/sync-boot-admin` | `BACK` | `/api/v1/boot/sys/permission/getUserPermissionByToken` |
| **SyncCMS** | `@empasy/sync-cms-admin` | `BACK` | `/api/v1/cms/sys/permission/getUserPermissionByToken` |
| **SyncShop** | `@empasy/sync-shop-admin` | `BACK` | `/api/v1/shop/sys/permission/getUserPermissionByToken` |
| **SyncOps** | `@empasy/sync-ops-admin` | `BACK` | `/api/v1/ops/sys/permission/getUserPermissionByToken` |
| **SyncETA** | `@empasy/sync-eta-admin` | `BACK` | `/api/v1/eta/sys/permission/getUserPermissionByToken` |
| **SyncCrawl** | `@empasy/sync-crawl-admin` | `BACK` | `/api/v1/crawl/sys/permission/getUserPermissionByToken` |
