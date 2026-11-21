---
title: コミットメッセージ
description: 効率的な Git コミットメッセージの作成方法を網羅した完全ガイドです。feat、fix、refactor などのタイプ別ルール、タイトル・本文の書き方から実践例まで解説します。
head:
  - - meta
    - name: keywords
      content: git commit, git commit メッセージ, git コミットルール, git コミット規約, commit message guide, commit convention, git 協業, git ブランチ戦略, feat, fix, refactor
  - - meta
    - property: og:title
      content: コミットメッセージ
  - - meta
    - property: og:description
      content: git commit, git commit メッセージ, git コミットルール, git コミット規約, commit message guide, commit convention, git 協業, git ブランチ戦略, feat, fix, refactor
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/agile/gitCommitLog
sort: 5000
---

## Git コミットメッセージの作成

## 要約（TL;DR）

- **形式**: `<type>(scope): <subject>`
- **タイトル（Subject）**: 命令形、**50文字以内**、末尾のピリオド・句点なし
- **本文（Body）**: _何を_ + **なぜ** 変更したか（必要な場合のみ、1行あたり約72文字を目安に折り返し）
- **フッター（Footer）**: Issue 連携は `Closes #123`、破壊的変更は `BREAKING CHANGE:`
- **タイプ（Conventional Commits）**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`
- **原則**: 1コミット＝1目的。「解決策はコードが語り、動機は本文が語る」

---

## 詳細説明

## 1) メッセージ構造

```text
<type>(任意:scope): <subject>

本文（任意） — 何を、なぜ変更したかを説明（72文字程度で改行）
必要に応じて箇条書きを使用

フッター（任意） — Issue 連携 / 破壊的変更 / 共同作業者など
```

### 例

```text
feat(auth): Google ソーシャルログインを追加

OAuth 2.0 に基づく Google アカウントでのログイン・会員登録に対応します。
既存のメールベース登録の転換率が低いため、代替フローを提供します。

Closes #52
```

---

## 2) タイトル（Subject）作成ルール

- **命令形の動詞** で始めます。「Add」「Fix」「Refactor」、日本語の場合は「追加」「修正」のように **行為** が明確に伝わるように記述します。
- **50文字以内**、**末尾のピリオド（.）や句点禁止**、**不要な修飾語禁止**。
- **Scope** は狭く明確に指定します（例：`auth`、`api`、`signup`、`ci`、`deps` など）。

**良い例**

- `fix(api): 会員登録時の重複メールチェックを追加`
- `refactor(search): インデックス戦略の変更により応答時間を改善`
- `docs: インストールガイドに Docker の利用方法を追加`

**悪い例**

- `update stuff`
- `fix`
- `final commit`, `temp`, `WIP`

---

## 3) 本文（Body） — _何を + なぜ_

- **何を** 変更したかの要約と、**なぜ** 必要だったかの背景・意図・代替案の比較を記述します。
- 「どのように（How）」を過度に説明する必要はありませんが、**重要な意思決定やトレードオフ** は必ず残します。
- バグ修正の場合は、**再現条件 → 原因 → 解決方法** の順序で書くと分かりやすくなります。
- 1行あたり **約72文字** で改行します（可読性および CLI ビューでの表示を考慮）。

**本文の例（バグ修正）**

```text
非同期バリデーション中に重複リクエストが発生すると、最後の応答が
前の結果で上書きされる問題を debounce 処理とキャンセルトークンで防止しました。

再現: 低速ネットワーク下で入力欄に素早く入力すると状態不整合が発生。
原因: 前回リクエストのキャンセル処理が未実装。
解決: AbortController による前回リクエストのキャンセル + debounce(300ms) を適用。
```

---

## 4) フッター（Footer）

- **Issue 連携**: `Closes #123` / `Fixes JIRA-456`
- **破壊的変更（Breaking Change）**: `BREAKING CHANGE:` で始め、**何が互換性を失うか** と **マイグレーション方法** を明記します。
- **共同作業者**: `Co-authored-by: 氏名 <email>`
- **参照**: `Refs #789`, `See also: ...`

**破壊的変更の例**

```text
BREAKING CHANGE: 会員テーブルに unique index(email) を追加。
既存の重複データはマイグレーションスクリプトで事前に整理する必要があります。
```

---

## 5) タイプ（Conventional Commits）クイックガイド

- `feat`: ユーザーに見える **新機能**
- `fix`: **バグ修正**
- `docs`: ドキュメント・ガイドの変更
- `style`: フォーマット・空白・セミコロンなど **ロジックに影響しない変更**
- `refactor`: リファクタリング（外部の振る舞いは同一）
- `test`: テストの追加・修正
- `chore`: ビルド・ツール・パッケージ関連作業（プロダクションコードへの影響が小さいもの）
- `build`: ビルドシステム・依存関係の変更
- `ci`: CI 設定・スクリプトの変更

> チーム内で **必須タイプを絞って** 運用すると一貫性が向上します（例：`feat|fix|refactor|docs|test|chore`）。

---

## 6) シチュエーション別サンプル

**機能追加**

```text
feat(search): おすすめキーワード API を追加

検索コンバージョン率向上のため、サーバー側から推奨キーワードを提供します。
AB テストのグループ B にのみ公開され、2週間のデータ収集後に評価予定です。

Closes #410
```

**バグ修正**

```text
fix(cart): 割引コードが重複適用される不具合を修正

割引ポリシーの優先順位計算における条件漏れにより、
特定のシナリオで割引が2回適用されていました。

Fixes #612
```

**リファクタリング**

```text
refactor(core): 依存性注入によりモジュール結合度を低減

シングルトンのグローバル参照を削除し、DI コンテナへ置き換えました。
テスト容易性と拡張性を高めるため、インターフェースを導入しています。
```

**ドキュメント**

```text
docs(readme): ローカル開発環境の構築手順を補足

Node バージョンの制約と .env サンプルファイルの説明を追加しました。
```

**設定・依存関係**

```text
chore(deps): lodash を 4.17.21 へセキュリティアップデート

GHSA-... 脆弱性パッチを含みます。
Refs #702
```

---

## 7) チーム運用のヒント

- **言語の統一**（日本語/英語）および **時制・表現の統一**（命令形）についてチーム内で合意形成を行います。
- **1コミット＝1目的**（レビューやリバートが容易になります）。変更は小さく保ち、こまめにコミットします。
- **PR タイトル＝代表的なコミットタイトル** とする慣例を揃えると、Changelog の品質が向上します。
- **Issue・ブランチ・コミットの連携ルール**: `feature/JIRA-123-auth-social-login` → コミット `feat(auth): ... (Closes JIRA-123)`

---

## 8) アンチパターン（避けるべき例）

- `WIP` の乱用や、`update`/`fix` などの **意味のないタイトル**
- **複数のロジックを1つのコミット** に混在させる（フォーマット変更 + リファクタリング + 新機能）
- コミットメッセージに **コードのダンプや長大なログ** をそのまま貼り付ける
- **本文を省略して** 背景や文脈が失われる（特にバグ修正時）

---

## 9) 自動化（任意）

- **Commit Template**（ローカル）: `git config --global commit.template ~/.gitmessage.txt`

```txt
# <type>(scope): <subject>
#
# Body: what + why (wrap ~72)
#
# Footer: Closes #, BREAKING CHANGE:, Co-authored-by:
```

- **commitlint + husky** によるルール強制（例：Node リポジトリ）
  `package.json` の例:

```json
{
  "devDependencies": {
    "@commitlint/cli": "^19",
    "@commitlint/config-conventional": "^19",
    "husky": "^9"
  },
  "commitlint": { "extends": ["@commitlint/config-conventional"] },
  "scripts": {
    "prepare": "husky install"
  }
}
```

セットアップ:

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```
