FROM navikt/node-express:16.15.1-alpine

WORKDIR /

COPY ./dist dist
COPY server.js server.js

EXPOSE 8000
CMD [ "node", "server.js" ]
