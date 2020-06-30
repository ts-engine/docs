---
id: setting-up-a-package
sidebar_label: Setting up a package
title: Setting up a package
---

Two types of packages are fully supported by ts-engine, Node.js applications and libraries. Because each type of package has different requirements at build time the type of the package must be provided when building.

The quickest way to get a new package up and running is to the `new-package` command. See detailed documentation for it [here](./new-package).

```sh
# Install ts-engine globally via yarn
yarn global add @ts-engine/cli

# or via npm
npm i -g @ts-engine/cli

# Create packages
ts-engine new-package --library --name my-lib
ts-engine new-package --node-app --name my-lib
```

## Setting up a Node.js application manually

A basic Node.js application only requires a `package.json` file and a code entry file `src/main.ts`.

```ts title="package.json"
{
  "name": "@examples/node-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "ts-engine build --node-app",
    "lint": "ts-engine lint",
    "start": "ts-engine start",
    "test": "ts-engine test",
    "typecheck": "ts-engine typecheck"
  },
  "dependencies": {
    "@ts-engine/runtime": "latest"
  },
  "devDependencies": {
    "@ts-engine/cli": "latest"
  }
}
```

```ts title="src/main.ts"
console.log("hello world");
```

:::note
Notice `--node-app` being passed to the build command in `package.json`
:::

:::note
Notice the additional dependency `@ts-engine/runtime`.
:::

## Setting up a library manually

A basic library only requires a `package.json` file and a code entry file `src/main.ts`.

```ts title="package.json"
{
  "name": "@examples/library",
  "version": "1.0.0",
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

```ts title="src/main.ts"
export const printHelloWorld = () => {
  console.log("Hello world!");
};
```

:::note
Notice `--library` being passed to the build command and `--emit` being passed to the typecheck command.
:::
