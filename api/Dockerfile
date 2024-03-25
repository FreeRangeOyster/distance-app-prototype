FROM node:lts-alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
ENV NODE_PATH=./build
RUN npm run build
