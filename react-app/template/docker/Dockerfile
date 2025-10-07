FROM node:20 AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build


FROM nginx:stable-alpine AS production

COPY --from=builder /app/build /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]