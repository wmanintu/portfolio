
FROM node:18.16.0

WORKDIR /app
COPY . ./
RUN npm install

CMD ["npm", "run", "dev"]
EXPOSE 3000