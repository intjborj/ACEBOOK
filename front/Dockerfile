FROM node:16.13.0-alpine
WORKDIR /usr/src/app/acebook/front
#COPY __generated__ ./
# COPY package*.json ./
COPY . .

RUN chmod +x wait-for
CMD sh -c './wait-for.sh 192.168.254.107:4000 -- echo "Eficode site is up"'
RUN yarn
RUN yarn build:gql
EXPOSE 3000
# RUN yarn build:gql
# RUN yarn start

CMD ["yarn", "start"]
# CMD ["yarn", "build", "start:prod"]
