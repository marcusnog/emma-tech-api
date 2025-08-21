# Imagem base com Node
FROM node:20-alpine

WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar TODAS as dependências (incluindo dev)
RUN npm install

# Copiar resto do código
COPY . .

# Porta da API
EXPOSE 3000

# Comando para rodar em modo desenvolvimento
CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "src/infra/webserver/server.ts"]
