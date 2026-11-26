---
title: Git Flow ブランチ運用戦略
description: チーム協業のための Git Flow 完全ガイドです。ブランチ構成、コミットメッセージ規約、リリースおよびホットフィックスの管理方法をステップごとに分かりやすく解説します。
head:
  - - meta
    - name: keywords
      content: git flow, git flow ガイド, git ブランチ戦略, feature branch, develop branch, release branch, hotfix branch, git commit メッセージ, git 協業, git workflow
  - - meta
    - property: og:title
      content: Git Flow
  - - meta
    - property: og:description
      content: チーム協業のための Git Flow 完全ガイドです。ブランチ構成、コミットメッセージ規約、リリースおよびホットフィックスの管理方法をステップごとに分かりやすく解説します。
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/agile/gitFlow
sort: 4000
---

# Git Flow ガイド

## 1. Git Flow とは？

- **チーム協業のための Git ブランチ戦略**
- 機能開発、バグ修正、リリースを体系的に管理できます。
- メリット:

  - 役割ごとのブランチ分離により混乱を最小限に抑制
  - 安定したリリースプロセス
  - チーム単位での協業に最適

---

## 2. ブランチの種類

Git Flow では、大きく分けて5つの主要ブランチを使用します。

1. **main (master)**

- 本番環境（実サービス）へデプロイされる安定したコード
- 常にデプロイ可能な状態を維持します。

2. **develop**

- 次期バージョン開発のための統合ブランチ
- すべての機能（feature）およびバグ修正がマージされる中心ブランチです。

3. **feature/**

- 新機能開発用のブランチ
- `develop` から分岐し、開発完了後に再び `develop` へマージします。
- 命名例:

  - `feature/login-api`
  - `feature/ui-redesign`

4. **release/**

- リリース準備用のブランチ
- `develop` から分岐し、QA・テスト後にバグ修正を行い、`main` と `develop` の両方にマージします。
- 命名例:

  - `release/1.2.0`

5. **hotfix/**

- 本番環境での緊急バグ修正用ブランチ
- `main` から分岐し、修正後に `main` と `develop` へマージします。
- 命名例:

  - `hotfix/1.2.1`

---

## 3. Git Flow ブランチフロー

```text
main -----------●------------------●------------------->
                ↑                  ↑
                │                  │
       release/1.2.0        hotfix/1.2.1
                ↑
develop ----●---●---●---●---●---●---●----------------->
             ↑   ↑
             │   │
feature/login   feature/payment
```

---

## 4. Git Flow 作業手順

### (1) 新機能の開発

```bash
git checkout develop
git checkout -b feature/機能名
# コード作業後
git add .
git commit -m "feat: 機能の説明"
git checkout develop
git merge --no-ff feature/機能名
git branch -d feature/機能名
```

### (2) リリース準備

```bash
git checkout develop
git checkout -b release/1.2.0
# QA / バグ修正
git commit -m "fix: release QA バグ修正"
git checkout main
git merge --no-ff release/1.2.0
git tag -a 1.2.0 -m "Release 1.2.0"
git checkout develop
git merge --no-ff release/1.2.0
git branch -d release/1.2.0
```

### (3) 緊急バグ修正

```bash
git checkout main
git checkout -b hotfix/1.2.1
# バグ修正
git commit -m "fix: 緊急バグ修正"
git checkout main
git merge --no-ff hotfix/1.2.1
git tag -a 1.2.1 -m "Hotfix 1.2.1"
git checkout develop
git merge --no-ff hotfix/1.2.1
git branch -d hotfix/1.2.1
```

---

## 5. コミットメッセージ規約（推奨：Angular スタイル）

- `feat`: 新機能の追加
- `fix`: バグ修正
- `docs`: ドキュメントの変更
- `style`: コードスタイルの変更（セミコロン、フォーマットなど）
- `refactor`: リファクタリング（機能の振る舞いは変更なし）
- `test`: テストコード関連の変更
- `chore`: ビルド・ツール設定の変更

例:

```text
feat(auth): ログイン API の実装
fix(ui): モバイル画面におけるボタン表示崩れの修正
```

---

## 6. Git Flow 協業チェックリスト

- すべての機能開発は `feature/` ブランチから開始します。
- `develop` ブランチへは直接コミットせず、マージのみを行います。
- リリースは必ず `release/` ブランチを経由して進めます。
- 緊急修正は `hotfix/` ブランチで即座に対応します。
- マージ時は `--no-ff` オプションを使用し、ブランチ履歴を保持します。
- コミットメッセージは規約に従います。
