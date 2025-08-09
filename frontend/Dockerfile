# Etapa 1: Build
FROM node:20-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json / pnpm-lock.yaml / yarn.lock
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o projeto
COPY . .

# Build da aplicação
RUN npm run build

# Etapa 2: Servir com NGINX
FROM nginx:stable-alpine

# Remover arquivos default do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar build gerado pelo Vite para a pasta pública do NGINX
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuração customizada do nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta
EXPOSE 80

# Comando de inicialização
CMD ["nginx", "-g", "daemon off;"]