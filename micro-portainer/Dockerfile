FROM node:16-alpine as builder

WORKDIR /app

RUN apk add --update gettext
COPY package.json yarn.lock nginx.conf ./

RUN yarn install --production=true
COPY . .
RUN yarn run build --mode production

FROM nginx:1.23.3-alpine as runtime

LABEL maintainer="Julio Cesar <julio@blackdevs.com.br>"
LABEL org.opencontainers.image.source "https://github.com/juliocesarscheidt/micro-portainer"
LABEL org.opencontainers.image.description "Docker API being proxied by Nginx, exposing its information on some UI made with VueJS"
LABEL org.opencontainers.image.licenses "MIT"

COPY docker-entrypoint.sh /opt/docker-entrypoint.sh
COPY --from=builder --chown=nginx:nginx /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

EXPOSE 8080

ENTRYPOINT ["/opt/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
