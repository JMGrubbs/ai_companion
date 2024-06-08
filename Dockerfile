# Stage 1: Build the React app
FROM node:18-alpine as build

# Set the working directory inside the container
WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]