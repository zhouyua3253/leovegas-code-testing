FROM node:16.13.0

COPY . /usr/src/code-testing-app

WORKDIR /usr/src/code-testing-app

RUN npm ci

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "start"]
