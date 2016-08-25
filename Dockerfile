
FROM node:6

RUN mkdir -p /usr/app
COPY . /usr/app
WORKDIR /usr/app
RUN npm install --production

ENV PORT 3000
EXPOSE  $PORT

CMD ["npm", "run", "server"]