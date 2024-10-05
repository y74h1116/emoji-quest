# 絵文字クエスト

## 起動
- Github からダウンロードしたら以下を実行  
  ```
  # ダウンロードして配置したディレクトリへ
  cd emoji-quest

  # Docker ビルド
  docker compose build
  
  # 必要なものをインストール
  docker compose run --rm react_quest npm install
  
  # コンテナを起動
  docker compose up

  ※Webブラウザで http://localhost:5173/ にアクセス
  ```
