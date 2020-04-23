---
id: build
sidebar_label: Build
title: Build
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Rollup](https://rollupjs.org/) and [Babel](https://babeljs.io/) are the primary tools that power builds in ts-engine.

Two types of packages are fully supported by ts-engine, Node.js applications and libraries. Because each type of package has different requirements at build time the type of the package must be provided when building.

<Tabs
defaultValue="nodejs"
values={[
{ label: 'Node.js App', value: 'nodejs', },
{ label: 'Library', value: 'library', },
]
}>
<TabItem value="nodejs">

## Building a Node.js application

To build run the following command:

```sh
ts-engine build --node-app
```

A Node.js application produces a single output file with all external dependencies bundled into it.

| Entry files   | Output files   |
| ------------- | -------------- |
| `src/main.ts` | `dist/main.js` |

</TabItem>
<TabItem value="library">

## Building a library

Libraries do not have their external dependencies bundled into them as it can lead to bundling issues when consumers use your package.

To build run the follow command:

```sh
ts-engine build --library
```

In order to support CommonJS and ES Modules two build outputs are produced, one for each. No external dependencies are bundled into the output.

| Entry files   | Output files       |
| ------------- | ------------------ |
| `src/main.ts` | `dist/main.cjs.js` |
|               | `dist/main.esm.js` |

### Package.json sanity check

When building a library ts-engine will check and enfore that `main`, `module` and `types` are set correctly in `package.json`.

:::warning
The build will not complete if it finds any issues when checking `package.json` and will inform you which fields are set incorrectly.
:::

</TabItem>
</Tabs>

## Watching for changes

The build command also supports watching for changes to source code and rebuilding automatically when changes occur.

To build and trigger watch mode run the following command:

<Tabs
defaultValue="nodejs"
values={[
{ label: 'Node.js App', value: 'nodejs', },
{ label: 'Library', value: 'library', },
]
}>
<TabItem value="nodejs">

```sh
ts-engine build --node-app --watch
```

</TabItem>
<TabItem value="library">

```sh
ts-engine build --library --watch
```

</TabItem>
</Tabs>

## Extending Babel config

Babel config does not need to be provided to ts-engine, however it is possible to extend the config it uses.

Install ts-engine's default babel preset:

<Tabs
defaultValue="yarn"
values={[
{ label: 'Yarn', value: 'yarn', },
{ label: 'npm', value: 'npm', },
]
}>
<TabItem value="yarn">

```sh
yarn add --dev @ts-engine/babel-preset
```

</TabItem>
<TabItem value="npm">

```sh
npm i -D @ts-engine/babel-preset
```

</TabItem>
</Tabs>

Add a `babel.config.js` file in your packages root directory:

```ts title="babel.config.json"
module.exports = {
  presets: ["@ts-engine/babel-preset"],
  // your config goes here
};
```
