# portfolio V2
![Nuxt.js](https://img.shields.io/badge/Nuxt.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jdasilvalima/portfoliov2?style=for-the-badge)
[![GitHub last commit](https://img.shields.io/github/last-commit/jdasilvalima/portfoliov2?style=for-the-badge)](https://github.com/jdasilvalima/portfoliov2/commits)

[![Build](https://github.com/jdasilvalima/portfoliov2/actions/workflows/nuxtjs.yml/badge.svg)](https://github.com/jdasilvalima/portfoliov2/actions)
[![Security](https://github.com/jdasilvalima/portfoliov2/actions/workflows/eslint.yml/badge.svg)](https://github.com/jdasilvalima/portfoliov2/actions)

## I. PROJECT DESCRIPTION
### I.1 Introduction
This is a personal portfolio to showcase my projects, skills, and services.

### I.2 Goals
WIP
- Learn more about [Github Actions](https://github.com/features/actions)
- Learn more about [Nuxt](https://nuxt.com/) and [NuxtDevTools](https://devtools.nuxt.com/)

## II. PROJECT SETUP
### II.1 Requirements and Instructions
- [Docker](https://www.docker.com/) neeeds to be installed

Clone this project
```sh
    mkdir jdportfolio
    git clone git@github.com:jdasilvalima/portfoliov2.git
```

Build and run locally :
```sh
    docker build -t jd-portfolio-img .
    docker run -p 3000:3000 --rm --name jd-portfolio-ctn jd-portfolio-img
```

### II.2 Run local tests
[Nuxt Eslint](https://eslint.nuxt.com/)
```sh
    npx @eslint/config-inspector
    or
    npm run lint
```

## II.2 APPLICATION ARCHITECTURE
WIP

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github
