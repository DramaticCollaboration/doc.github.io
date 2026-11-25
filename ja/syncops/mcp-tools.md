---
title: "SyncOps MCP ツールおよび REST API リファレンス"
sidebarTitle: "MCP ツール & API"
description: "SyncOps が SyncVerse 中央管制塔および外部エージェントに提供する 4 大コア MCP ツール（ops_analyze_project_profitability 等）と /api/v1/ops 標準 REST API 仕様です。"
head:
  - - meta
    - name: keywords
      content: SyncOps MCP, ops_analyze_project_profitability, ops_check_allocation_overload, ops_audit_subcontract_payment, ops_verify_rnd_note_hash, REST API, /api/v1/ops
  - - meta
    - property: og:title
      content: "SyncOps MCP ツールおよび REST API リファレンス"
  - - meta
    - property: og:description
      content: "デュアル単価損益監査、人材 M/M 超過配分チェック、下請支給期日監査、電子研究ノート SHA-256 検証 MCP ツールおよび REST API 仕様"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/logo.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/syncops/mcp-tools
sort: 3
---

# SyncOps MCP ツールおよび REST API リファレンス

`SyncOps` は、全社単一 Canonical URL 標準に従い、すべての REST API および Model Context Protocol（MCP）エンドポイントを **`/api/v1/ops/...`** プレフィックスで提供します。

- **クラウドエンドポイント**: `https://empasy.io/ja/solutions/sync-ops.htmlapi/v1/ops`
- **ローカル開発ポート**: Admin UI `http://localhost:3104` / API Server `http://localhost:18084`

---

## 1. 標準 MCP ツール（MCP Tools）仕様

SyncVerse 中央管制塔または外部 AI エージェントは、JSON-RPC 2.0 ベースの MCP プロトコルを通じて SyncOps の 4 大コア事業運営ツールを自律的に呼び出すことができます。

### 1.1 `ops_analyze_project_profitability`
プロジェクト別の契約単価対実投入原価デュアル損益を分析し、目標営業利益率未達のリスクを診断します。

- **入力パラメータ（Arguments）**:
  ```json
  {
    "projectId": "PRJ-2026-001",
    "includeForecast": true,
    "targetYear": 2026
  }
  ```
- **返却ペイロード例**:
  ```json
  {
    "projectId": "PRJ-2026-001",
    "projectName": "次世代デジタル金融統合管制プラットフォーム構築",
    "netContractAmount": 1200000000,
    "cumulativeActualCost": 815000000,
    "directGuaranteeFee": 4200000,
    "operatingMarginRate": 24.8,
    "targetMarginRate": 30.0,
    "burnRatePercent": 68.2,
    "riskStatus": "WARNING_MARGIN_DROP",
    "recommendation": "高級（ADVANCED）外注人材 2 名の追加投入により、マージン率が目標比 5.2%p 低下しました。契約変更（CR）請求または待機正社員への交代を推奨します。"
  }
  ```

### 1.2 `ops_check_allocation_overload`
全社技術人材の月別 M/M 稼働率マトリックスを照会して `1.0 M/M`（100%）超過配分人材を検出し、`pgvector` スキルエンベディングに基づいて投入可能な待機（Bench）人材を推薦します。

- **入力パラメータ（Arguments）**:
  ```json
  {
    "workYear": 2026,
    "workMonth": 10,
    "requiredKosaGrade": "ADVANCED",
    "requiredSkills": ["Java 25", "Spring Boot", "PostgreSQL"]
  }
  ```
- **返却ペイロード例**:
  ```json
  {
    "overloadedEngineers": [],
    "benchCandidates": [
      {
        "employeeId": "EMP-2026-014",
        "name": "キム・スソク",
        "kosaGrade": "ADVANCED",
        "currentAllocationMm": 0.0,
        "skillSimilarityScore": 0.96,
        "baseMonthlyCost": 7200000,
        "expectedBillingSpread": 4800000
      }
    ]
  }
  ```

### 1.3 `ops_audit_subcontract_payment`
下請法第 6 条・第 13 条（元請代金受領後 15 日 / 検収後 60 日）の支給期日遵守状況と 4 大履行保証保険の満期到来案件を全数監査します。

- **入力パラメータ（Arguments）**:
  ```json
  {
    "checkOverdueOnly": false,
    "warningDaysThreshold": 7
  }
  ```
- **返却ペイロード例**:
  ```json
  {
    "auditedMilestones": 18,
    "overdueCount": 0,
    "imminentWithin7DaysCount": 1,
    "alerts": [
      {
        "vendorMilestoneId": "VMS-2026-009",
        "vendorName": "株式会社テックソリューションパートナーズ",
        "stepName": "第 2 回中間金出来高",
        "supplyAmount": 85000000,
        "statutoryDeadlineDate": "2026-10-29",
        "daysRemaining": 5,
        "accruedDelayInterest": 0,
        "status": "IMMINENT_D5"
      }
    ]
  }
  ```

### 1.4 `ops_verify_rnd_note_hash`
租税特例制限法第 10 条の研究開発税額控除用電子研究ノート（`ops_research_note`）の本文、作成者・確認者の署名、Git コミットハッシュおよび SHA-256 タイムスタンプ認証（`tsa_timestamp`）ハッシュの整合性を検証します。

- **入力パラメータ（Arguments）**:
  ```json
  {
    "researchProjectId": "RND-2026-AI-01",
    "noteId": "RNOTE-2026-104"
  }
  ```
- **返却ペイロード例**:
  ```json
  {
    "noteId": "RNOTE-2026-104",
    "authorId": "EMP-2026-003",
    "witnessId": "EMP-2026-001",
    "gitCommitHashes": "a1b2c3d4,e5f6a7b8",
    "tsaTimestampHash": "sha256:9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    "integrityVerified": true,
    "verifiedAt": "2026-10-24T13:50:00Z"
  }
  ```

---

## 2. コア REST API 仕様（`/api/v1/ops/...`）

| 機能領域 | HTTP Method & Canonical Endpoint | 説明 |
| :--- | :--- | :--- |
| **動的メニュー認可** | `GET /api/v1/ops/sys/permission/getUserPermissionByToken` | 現在のログインセッションにおけるロール別動的メニューツリー（`sys_permission`）の照会 |
| **AI 人材マッチング** | `POST /api/v1/ops/ai/match-talents` | 要求 KOSA 等級・スキルセットに基づく待機（Bench）人材のベクトルマッチングおよびマージンシミュレーション |
| **AI リスクログ** | `GET /api/v1/ops/ai/risk-logs`<br/>`POST /api/v1/ops/ai/risk-logs/{id}/resolve` | `RiskGuard` が検知したマージン急落・工数超過・下請期日切迫アラートの照会および対処処理 |
| **多次元損益ピボット** | `GET /api/v1/ops/analysis/profit-matrix` | 顧客・プロジェクト・部門・期間別のデュアル単価売上・原価・貢献利益マトリックスの照会 |
| **プロジェクトおよび配分** | `GET /api/v1/ops/projects`<br/>`POST /api/v1/ops/assignments` | SI プロジェクトマスター管理および人材 M/M 投入配分の登録 |
| **タイムシート承認** | `POST /api/v1/ops/timesheets/{id}/approve` | 週間実投入工数の承認（`CLIENT_SI` 売上原価 / `CORE_RD` 研究開発費の自動仕訳） |
| **KOSA 等級算出** | `POST /api/v1/ops/kosa/calculate-grade` | 学歴・資格・認定経歴日数に基づく KOSA 技術等級の自動算定 |
| **元請・下請 & 保証** | `GET /api/v1/ops/contracts`<br/>`GET /api/v1/ops/contracts/{id}/compliance-check` | 元請・下請契約、4 大履行保証保険の満期および下請法遵守状況の点検 |
| **ワンクリック業務引継ぎ** | `POST /api/v1/ops/contacts/handover` | 担当顧客・協力会社の連絡先および未解決タスクの一括継承 + AI 要約ブリーフィングの生成 |
| **電子研究ノート** | `POST /api/v1/ops/research/notes` | 租税特例制限法 R&D 税額控除用電子研究ノートの登録および SHA-256 タイムスタンプ認証署名の生成 |

---

## 3. cURL 呼び出し例

### 3.1 AI 最適人材マッチングリクエスト
```bash
curl -X POST "https://empasy.io/ja/solutions/sync-ops.htmlapi/v1/ops/ai/match-talents" \
  -H "Authorization: Bearer ${SYNC_OPS_JWT}" \
  -H "Content-Type: application/json" \
  -d '{
    "projectId": "PRJ-2026-001",
    "requiredKosaGrade": "ADVANCED",
    "requiredSkills": ["Spring Boot", "Vue 3", "PostgreSQL"],
    "rollInDate": "2026-11-01",
    "rollOutDate": "2027-04-30",
    "proposedBillingUnitPrice": 12500000
  }'
```

### 3.2 ワンクリック担当者業務引継ぎの実行
```bash
curl -X POST "https://empasy.io/ja/solutions/sync-ops.htmlapi/v1/ops/contacts/handover" \
  -H "Authorization: Bearer ${SYNC_OPS_JWT}" \
  -H "Content-Type: application/json" \
  -d '{
    "predecessorEmployeeId": "EMP-2026-008",
    "successorEmployeeId": "EMP-2026-012",
    "handoverReason": "次世代金融 PMO 統括の職位変更に伴う発注元キーマンの業務引継ぎ"
  }'
```
