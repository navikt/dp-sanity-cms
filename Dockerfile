FROM navikt/node-express:12.2.0-alpine

WORKDIR /

COPY ./dist dist
COPY server.js server.js

EXPOSE 8000
CMD [ "node", "server.js" ]
