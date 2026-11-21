---
title: "シナリオ録画およびエディターガイド"
description: "Web ブラウザ上のユーザーイベントをリアルタイムで記録し、待機条件、検証条件、リカバリスクリプトを組み合わせて安定した回帰テストシナリオを構成する方法を説明します。"
head:
  - - meta
    - name: keywords
      content: "SyncETA, シナリオ録画, ブラウザレコーダー, 待機レコード, 検証レコード, DOM 検証, AI 画面検証, 失敗リカバリスクリプト"
  - - meta
    - property: og:title
      content: "シナリオ録画およびエディターガイド | SyncETA"
  - - meta
    - property: og:description
      content: "ユーザーイベントの収集、待機・検証条件の設定およびシナリオ編集ガイドです。"
sort: 300
---

# シナリオ録画およびエディターガイド

SyncETA エディターは、ブラウザ操作（クリック、テキスト入力、ページ遷移など）をリアルタイムでキャプチャし、イベント発生時点の DOM 情報（XPath、CSS Selector、タグ属性）を構造化してテストケースを生成します。

---

## 1. シナリオの定義と単位

**「シナリオ（Scenario）」**は、特定のビジネスフローを完結させるテスト単位です。

例: `ショッピングサイトの商品検索およびカート追加`
1. メインホームページへアクセス
2. 検索バーをクリックして検索キーワード（`ワイヤレスマウス`）を入力
3. 検索を実行して結果一覧を読み込み
4. 最初の商品をクリックして詳細ページへ移動
5. 「カートに入れる」ボタンをクリックし、完了モーダルを検証

---

## 2. シナリオ作成および録画手順

### ステップ 1: シナリオメニューへの移動
1. 左側サイドバーの **「シナリオ」** メニューをクリックします。
2. 右上の **「新しいシナリオ」** ボタンをクリックして録画設定モーダルを開きます。

![シナリオ作成クリック](../../ko/synceta/image/scenario-create/new_scenario.png)

### ステップ 2: 録画ブラウザおよび解像度の設定
- **対象 URL**: テストを実行する Web ページのベースアドレスを入力します。
- **録画ブラウザ**: 録画を行うブラウザエンジン（Chrome、Edge など）を選択します。
- **ビューポート解像度**: 録画時に適用するブラウザ解像度を設定します（例: 1920x1080、1400x800）。

![シナリオ録画前の設定](../../ko/synceta/image/scenario-create/select_option.png)

### ステップ 3: 収集イベントフィルターの設定
収集するイベントタイプ（クリック、キーボード入力、マウスオーバー、スクロールなど）を指定します。一般的な Web テストの場合は、デフォルトの推奨設定を維持します。

![許可イベント設定](../../ko/synceta/image/scenario-create/allow_event.png)

### ステップ 4: リアルタイム録画の実行
録画が開始されると専用のブラウザウィンドウが表示されます。ブラウザ上で実際のユーザーフローに沿って操作を進めると、下部の一覧にイベントレコードが順次収集されます。

![録画開始](../../ko/synceta/image/scenario-create/start_recording.png)

### ステップ 5: DOM 情報収集の確認
収集された各レコードには、イベントが発生した対象ノードのタグ、ID、Class、絶対/相対 XPath 情報が含まれます。

![DOM 情報収集](../../ko/synceta/image/scenario-create/select_dom_info.png)

### ステップ 6: マルチタブ操作のサポート
録画中に新規タブまたはポップアップウィンドウが開かれた場合、タブ切り替えイベントを自動的に認識し、複数タブにまたがるシナリオを連続して録画します。

![マルチタブ録画](../../ko/synceta/image/scenario-create/new_tap.png)

---

## 3. 待機条件（Wait Conditions）の追加

非同期ネットワーク通信（AJAX/Fetch）や画面レンダリングの遅延によるテストの不安定性を防ぐため、3 種類の待機レコードをサポートしています。

| 待機タイプ | 説明 | 推奨される使用タイミング |
| :--- | :--- | :--- |
| **時間待機（Fixed Timeout）** | 指定された時間（ミリ秒）だけ一時停止します。 | 外部システム API の応答遅延待機 |
| **要素表示待機（DOM Visible）** | 特定の DOM エレメントが画面にレンダリングされるまで待機します。 | 非同期レイヤーポップアップの読み込み待機 |
| **要素値一致待機（Value Match）** | 対象要素のテキストまたは属性が特定の値に変化するまで待機します。 | 処理ステータス（「完了」）または注文番号の生成待機 |

### 時間待機条件の追加方法
1. 待機が必要なレコードを右クリックします。
2. **「待機条件の追加」 -> 「時間待機」** を選択し、待機時間（ms）を入力します。

![時間待機右クリック](../../ko/synceta/image/scenario-create/time_wait.png)
![時間待機設定](../../ko/synceta/image/scenario-create/time_wait2.png)
![時間待機レコード作成](../../ko/synceta/image/scenario-create/time_wait3.png)

### 要素表示待機条件の追加方法
1. レコードを右クリックし、**「待機条件の追加」 -> 「要素表示待機」** を選択します。
2. 録画ブラウザウィンドウ上で待機対象とする DOM 要素を直接クリックして指定します。

![DOM 待機右クリック](../../ko/synceta/image/scenario-create/dom_wait.png)
![DOM 要素選択](../../ko/synceta/image/scenario-create/dom_wait2.png)
![DOM 待機レコード作成](../../ko/synceta/image/scenario-create/dom_wait3.png)

### 要素値一致待機条件の追加方法
1. レコードを右クリックし、**「待機条件の追加」 -> 「要素値一致待機」** を選択します。
2. ブラウザ上で対象要素を選択し、期待する一致テキストを入力します。

![値一致待機右クリック](../../ko/synceta/image/scenario-create/value_wait.png)
![値一致待機設定](../../ko/synceta/image/scenario-create/value_wait2.png)

---

## 4. 検証条件（Assertions）の追加

テストの成否を客観的に判定するため、3 種類の検証レコードを提供しています。

| 検証タイプ | 説明 |
| :--- | :--- |
| **要素表示検証** | 特定の UI コンポーネント（ボタン、バナー、モーダルなど）が画面上に正しく存在するか検証 |
| **要素値検証** | 特定要素のテキスト、金額、ステータス文字列が期待値と一致するか検証 |
| **AI 画面検証（Vision AI）** | ブラウザの画面キャプチャ画像に基づき、視覚的な異常の有無（レイアウト崩れ、重なり現象）を検証 |

### 要素表示および値検証の追加
レコードを右クリックしたうえで、**「検証条件の追加」** メニューから希望の検証方式を選択し、対象要素を指定します。

![DOM 検証右クリック](../../ko/synceta/image/scenario-create/valid_dom.png)
![DOM 検証対象選択](../../ko/synceta/image/scenario-create/valid_dom2.png)
![DOM 検証レコード作成](../../ko/synceta/image/scenario-create/valid_dom3.png)

![値検証右クリック](../../ko/synceta/image/scenario-create/valid_value.png)
![値検証設定](../../ko/synceta/image/scenario-create/valid_value2.png)
![値検証レコード作成](../../ko/synceta/image/scenario-create/valid_value3.png)

### AI 画面検証（Vision AI）
テキストマッチングだけでは確認が難しい複合グラフィックや、レスポンシブレイアウトの正常性を検証する際に使用します。検証プロンプト（例: 「検索結果の地図領域が他の要素に覆われることなく正常に表示されているか確認」）を入力すると、実行時に画面キャプチャに基づく視覚検証を実行します。

![AI 検証右クリック](../../ko/synceta/image/scenario-create/valid_ai.png)
![AI 検証プロンプト入力](../../ko/synceta/image/scenario-create/valid_ai2.png)

---

## 5. シナリオの編集および続きからの録画

既存のシナリオの特定ステップ以降から、追加操作を続けて録画することができます。

1. シナリオ一覧から対象シナリオを選択し、**「編集」** ボタンをクリックします。
2. 続きの録画を開始する基準レコードを選択します。
3. ブラウザが起動して基準レコードまで自動再生された後、待機状態から追加のユーザー操作を記録します。

![シナリオ編集クリック](../../ko/synceta/image/scenario-create/edit.png)
![基準レコード選択](../../ko/synceta/image/scenario-create/edit2.png)
![続きの録画実行](../../ko/synceta/image/scenario-create/edit3.png)

---

## 6. 付加機能

- **レコードノート（Comments）**: 各ステップにテストの目的や参考事項のメモを記述します。
  ![ノート機能](../../ko/synceta/image/scenario-create/comment.png)
- **失敗リカバリスクリプト（Recovery Script）**: 特定ステップの失敗時にセッション終了を防ぐための例外処理 JavaScript スクリプトを指定します。
  ![リカバリスクリプト](../../ko/synceta/image/scenario-create/recover.png)
- **データセット変数バインディング**: 入力テキストをハードコーディングせず、データセット変数（`{{username}}` など）で置換します。
  ![データセット変数](../../ko/synceta/image/scenario-create/dataset.png)
- **ステップの削除および無効化**: 不要なレコードの削除、または実行対象からの一時除外を行います。
  ![ステップ削除](../../ko/synceta/image/scenario-create/delete.png)
  ![ステップ無効化](../../ko/synceta/image/scenario-create/disable.png)
