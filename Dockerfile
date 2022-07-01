#
# BUILD
#
FROM node:16.13.0-alpine as mysign_build
WORKDIR /usr/src/app
COPY ./ /usr/src/app

RUN npm install
RUN npm run build --prod

#
# RUN
#
FROM caddy:alpine
COPY --from=mysign_build /usr/src/app/dist/mysign /usr/share/caddy/
COPY ./Caddyfile /etc/Caddyfile
EXPOSE 80
CMD ["caddy", "run", "--config", "/etc/Caddyfile"]
