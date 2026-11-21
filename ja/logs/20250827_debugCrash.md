---
title: "Linux Electron デバッグクラッシュ（ENOSPC inotify watcher 上限超過）トラブルシューティング"
description: "Linux 環境で Electron アプリケーションのデバッグ実行中に発生する ENOSPC（System limit for number of file watchers reached）カーネル inotify 上限超過の原因分析および sysctl 永続チューニングガイドです。"
head:
  - - meta
    - name: keywords
      content: SyncETA, Electron, Linux, ENOSPC, inotify, max_user_watches, max_user_instances, chokidar, デバッグ, トラブルシューティング
  - - meta
    - property: og:title
      content: "Linux Electron デバッグクラッシュ（ENOSPC inotify watcher 上限超過）トラブルシューティング | Empasy Docs"
  - - meta
    - property: og:description
      content: "Linux カーネル fs.inotify.max_user_watches 上限の引き上げおよび CHOKIDAR_USEPOLLING フォールバックによる Electron 開発サーバークラッシュの解決ガイドです。"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/logs/20250827_debugCrash
sort: 400
---

# Linux Electron デバッグクラッシュ（`ENOSPC: System limit for number of file watchers reached`）トラブルシューティング

## 1. 障害現象および原因分析（RCA）

Linux デスクトップ開発環境で SyncETA Electron アプリケーションをデバッグモード（`yarn dev:debug`）で起動する際、Vite/Chokidar のファイル変更監視機能が `node_modules` およびワークスペース配下ディレクトリのファイルディスクリプタを監視する過程で Linux カーネルのデフォルト `inotify` ウォッチャー上限（`8192` または `65536`）を超過し、`ENOSPC: System limit for number of file watchers reached` 例外とともにプロセスが異常終了する現象です。

---

## 2. 解決方法 1: Linux カーネル `inotify` Watcher 上限の引き上げ（推奨）

### 2.1 現在のカーネル設定値の確認

```bash
cat /proc/sys/fs/inotify/max_user_watches
cat /proc/sys/fs/inotify/max_user_instances
```

### 2.2 ランタイム即時引き上げの適用（一時適用）

```bash
sudo sysctl fs.inotify.max_user_watches=524288
sudo sysctl fs.inotify.max_user_instances=1024
```

### 2.3 永続設定の適用（`/etc/sysctl.d/99-inotify.conf`）

システム再起動後も設定が維持されるよう、`sysctl.d` 設定ファイルを登録します。

```bash
echo 'fs.inotify.max_user_watches=524288' | sudo tee /etc/sysctl.d/99-inotify.conf
echo 'fs.inotify.max_user_instances=1024' | sudo tee -a /etc/sysctl.d/99-inotify.conf
sudo sysctl -p /etc/sysctl.d/99-inotify.conf
```

設定反映後、`yarn dev:debug` を再実行して正常に起動するかどうかを確認します。

---

## 3. 解決方法 2: カーネルパラメータ変更不可時の Polling モード切り替え（コンテナ／制限環境）

`sudo` 権限がない、またはカーネルパラメータの変更が制限されている CI コンテナ環境では、ファイルシステムイベントの代わりにポーリング（Polling）モードを有効化します。

### 3.1 単発環境変数での実行

```bash
CHOKIDAR_USEPOLLING=1 CHOKIDAR_INTERVAL=800 yarn dev:debug
```

### 3.2 IDE Run/Debug Configuration への登録

IntelliJ IDEA の **Run/Debug Configurations -> Environment variables** 項目に以下の変数を固定登録して常時適用できます。

| 環境変数キー | 推奨設定値 | 説明 |
| :--- | :--- | :--- |
| `CHOKIDAR_USEPOLLING` | `1` | OS カーネル `inotify` の代わりに定期的なファイル状態ポーリングを有効化 |
| `CHOKIDAR_INTERVAL` | `800` | ファイル変更検知のポーリング周期（`ms` 単位、CPU 負荷を最小化） |
