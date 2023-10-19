<h1 align="center">
Peanut Butter Payroll
</h1>

<p align="center">
A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>


## Description

This is a comprehensive guide on how to set up and run the client and server-api applications in a mono-repo setup.

## Installation

```bash
$ git clone https://github.com/ChiromboKenT/peanut-butter-payroll.git
$ cd peanut-butter-payroll
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
