FROM navikt/node-express:16-alpine

WORKDIR /

COPY ./dist dist
COPY server.js server.js

EXPOSE 8000
CMD [ "node", "server.js" ]
