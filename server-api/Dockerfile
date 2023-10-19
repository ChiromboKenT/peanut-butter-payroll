# Use an official Node runtime as a parent image
FROM node:18 AS build-stage
WORKDIR /app

COPY package*.json ./
COPY ./prisma prisma

RUN npm install
RUN npx prisma generate

COPY . .
ARG NODE_ENV=production

RUN npm run build

# Start a new stage for a smaller image size
FROM node:18-alpine as production-stage

ARG NODE_ENV=production
WORKDIR /app
COPY --from=build-stage /app /app
EXPOSE 3000

CMD if [ "$NODE_ENV" = "development" ] ; then npm run start:dev ; else npm start ; fi
