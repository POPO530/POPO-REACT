# Node.js公式イメージを使用
FROM node:18

# 作業ディレクトリ
WORKDIR /src

# 依存関係ファイルを先にコピー（キャッシュ効率）
COPY package.json yarn.lock ./
RUN yarn install

# 残りのファイルをコピー
COPY . .

# ポート設定（Vite開発サーバ）
EXPOSE 5173

# デフォルトコマンド（composeで上書きも可能）
CMD ["yarn", "dev"]