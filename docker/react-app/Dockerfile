FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY ../.. .

RUN npm run build:prod

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
