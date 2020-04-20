---
id: setting-up-a-package
sidebar_label: Setting up a package
title: Setting up a package
---

Two types of packages are fully supported by ts-engine, Node.js applications and Libraries. Because each type of package has different requirements at build time the type of the package must be provided when building.

## Setting up a Node.js application

### `package.json`

Notice `--node-app` being passed to the build command.

```ts
{
  "name": "@examples/node-app",
  "version": "1.0.0",
  "license": "MIT",
  "private": true,
  "scripts": {
    "build": "ts-engine build --node-app",
    "lint": "ts-engine lint",
    "test": "ts-engine test",
    "typecheck": "ts-engine typecheck"
  },
  "devDependencies": {
    "@ts-engine/cli": "latest"
  }
}
```

### `src/main.ts`

This is the entry point to your application.

```ts
console.log("hello world");
```

## Setting up a library

### package.json

Notice `--library` being passed to the build command and `--emit` being passed to the typecheck command.

```ts
{
  "name": "@examples/library",
  "version": "1.0.0",
  "license": "MIT",
  "main": "dist/main.cjs.js",
  "module": "dist/main.esm.js",
  "types": "dist/main.d.ts",
  "sideEffects": false,
  "scripts": {
    "build": "ts-engine build --library",
    "lint": "ts-engine lint",
    "test": "ts-engine test",
    "typecheck": "ts-engine typecheck --emit"
  },
  "devDependencies": {
    "@ts-engine/cli": "latest"
  }
}
```

### src/main.ts

This is the entry point to your library.

```ts
export const printHelloWorld = () => {
  console.log("Hello world!");
};
```
