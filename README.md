<p align="center">
  <a href="https://yourproject.com/" target="blank"><img src="https://yourproject.com/logo.png" width="320" alt="Project Logo" /></a>
</p>

<p align="center">
A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

<p align="center">
<a href="https://www.npmjs.com/package/nest" target="_blank"><img src="https://img.shields.io/npm/v/nest.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/nest" target="_blank"><img src="https://img.shields.io/npm/l/nest.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/nest" target="_blank"><img src="https://img.shields.io/npm/dm/nest.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest" target="_blank"><img src="https://travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://www.codacy.com/app/nestjs/nest?utm_source=github.com&utm_medium=referral&utm_content=nestjs/nest&utm_campaign=Badge_Grade" target="_blank"><img src="https://api.codacy.com/project/badge/Grade/a994873d496345b5a4a7684a7145308f" alt="Codacy" /></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
</p>

## Description

This is a comprehensive guide on how to set up and run the client and server-api applications in a mono-repo setup.

## Installation

```bash
$ git clone <repository-url>
$ cd <repository-directory>
```

## Running the app with Docker
First-Time Setup
Build and start the Docker containers:

```bash
$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```
Run migrations on the server-api container for the first-time setup:

```bash
$ docker exec -it <server-api-container-id> npm run migrate:prepare

```

### Regular Running
After the first-time setup, start the application with:

```bash
$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

### Access the Application
- Client: http://localhost:3001
- Server API: http://localhost:3000

### Support
This is an open-source project. Support the project by starring the repository or contributing to the development.

Stay in touch
Author - Kenny Chirombo

License
This project is MIT licensed.
