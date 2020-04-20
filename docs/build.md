---
id: build
sidebar_label: Build
title: Build
---

[Rollup](https://rollupjs.org/) and [Babel](https://babeljs.io/) are the primary tools that power builds in ts-engine.

## Building a Node.js application

Node.js applications have all their external dependencies bundled into them so that they can run stand alone and only have a dependency on Node.js itself.

| Entry files   | Output files   |
| ------------- | -------------- |
| `src/main.ts` | `dist/main.js` |

To build run the following command:

```sh
ts-engine build --node-app
```

## Building a library

Libraries do not have their external dependencies bundled into them as it can lead to bundling issues when consumers use your package. In order to support CommonJS and ES Modules two build outputs are produced, one for each.

| Entry files   | Output files       |
| ------------- | ------------------ |
| `src/main.ts` | `dist/main.cjs.js` |
|               | `dist/main.esm.js` |

To build run the follow command:

```sh
ts-engine build --library
```

When building a library package ts-engine will check and enfore that `main`, `module` and `types` are set correctly in `package.json`. **The build will not complete if it finds any issues, but will inform you which fields are set incorrectly.**

## Watching for changes

The build command also supports watching for changes to source code and rebuilding automatically when changes occur.

To build and trigger watch mode run the following command:

```sh
# Node.js application
ts-engine build --node-app --watch

# Library
ts-engine build --library --watch
```

## Extending Babel config

Babel config does not need to be provided to ts-engine, however it is possible to extend the config it uses.

Install ts-engine's default babel preset:

```sh
yarn add --dev @ts-engine/babel-preset
```

Add an `babel.config.js` file in your packages root directory:

```ts
module.exports = {
  presets: ["@ts-engine/babel-preset"],
  // your config goes here
};
```
