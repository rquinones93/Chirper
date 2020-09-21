# Chirper

A Twitter Clone built with friends

## About

Chirper is a Twitter Clone and playground for my friends and myself. We want to try and build out a highly functional Twitter clone, and mess around with tools and technology that we find interesting - and hopefully have a running project we can show off.

# Dependencies

These must all be installed before you can work on the project.

- Homebrew
  - [How to Install](https://brew.sh/)
  - Note: Homebrew works on MacOS, Linux, and the Linux Subsystem of Windows 10
- Docker - [Docker Official - Get Docker](https://docs.docker.com/get-docker/)

## Set up commands

```bash
# Install non-NPM dependencies if missing
brew install postgresql

# Install NPM dependencies
npm install

# Start PostgreSQL DB running in Docker Container
cd database/prisma
docker-compose up -d

# Optional: Seed the DB Container
node database/prisma/src/seed.js
```

