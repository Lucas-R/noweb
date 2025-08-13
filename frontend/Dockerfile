FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG VITE_ZIPCODE_API
ARG VITE_URL_API
ENV VITE_ZIPCODE_API=$VITE_ZIPCODE_API
ENV VITE_URL_API=$VITE_URL_API

RUN npm run build
FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]