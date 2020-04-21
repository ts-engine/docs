# @ts-engine/docs

[![Netlify Status](https://api.netlify.com/api/v1/badges/489cd504-6871-48f5-a6a6-b88191c92041/deploy-status)](https://app.netlify.com/sites/ts-engine/deploys)

Documentation website for ts-engine. Powered by [Docusaurus 2](https://v2.docusaurus.io/), see their auto-generated readme [here](./DOCUSAURUS_README.md).

# Getting started

```sh
# Install dependencies
yarn

# Run dev server with hot reloading
yarn start
```

# Building for production

> **This project uses Docusaurus v2 which is still in alpha!**

Docusaurus ships with a build command but it is currently broken on the alpha release. Instead we have a script that builds this website inside their own mono repo to fix the build issues.

To build run the custom script:

```sh
./build.sh
```
