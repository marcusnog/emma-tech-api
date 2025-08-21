FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Instalar TODAS as dependências (dev e prod)
RUN npm install

COPY . .

EXPOSE 3000

# Rodar com ts-node-dev
CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "src/infra/webserver/server.ts"]
