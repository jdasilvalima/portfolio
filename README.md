# portfolio V2
![Nuxt.js](https://img.shields.io/badge/Nuxt.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jdasilvalima/portfoliov2?style=for-the-badge)
[![GitHub last commit](https://img.shields.io/github/last-commit/jdasilvalima/portfoliov2?style=for-the-badge)](https://github.com/jdasilvalima/portfoliov2/commits)

## I. PROJECT DESCRIPTION
### I.1 Introduction
This is a personal portfolio to showcase my projects, skills, and services.

### I.2 Goals
- Learn more about [Nuxt](https://nuxt.com/) and [NuxtDevTools](https://devtools.nuxt.com/)
- Learn more about [Github Actions](https://github.com/features/actions)

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

## III. REFERENCES

* [Deployment documentation](https://nuxt.com/docs/getting-started/deployment) for Nuxt.js project.
* [Uploading a SARIF file to GitHub](https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github) . You can upload SARIF files generated outside GitHub and see code scanning alerts from third-party tools in your repository.
* Font [Paperwork Black](https://fontain.org/paperwork/)