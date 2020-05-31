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

To build a Node.js application run the following command:

```sh
ts-engine build --node-app
```

A Node.js application produces a single output file.

| Entry files   | Output files   | Module type |
| ------------- | -------------- | ----------- |
| `src/main.ts` | `dist/main.js` | CommonJs    |

</TabItem>
<TabItem value="library">

## Building a library

To build a library run the follow command:

```sh
ts-engine build --library
```

In order to support CommonJS and ES Modules two build outputs are produced, one for each.

| Entry files   | Output files       | Module type |
| ------------- | ------------------ | ----------- |
| `src/main.ts` | `dist/main.cjs.js` | CommonJs    |
|               | `dist/main.esm.js` | ES Modules  |

### Package.json sanity check

When building a library ts-engine will check and enfore that `main`, `module` and `types` are set correctly in `package.json`.

:::note
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

## Minifying output

By default the build output is not minified. [Terser](https://github.com/terser/terser) is used to minify code if you provide the minify option.

To minify the output run the following command:

<Tabs
defaultValue="nodejs"
values={[
{ label: 'Node.js App', value: 'nodejs', },
{ label: 'Library', value: 'library', },
]
}>
<TabItem value="nodejs">

```sh
ts-engine build --node-app --minify
```

</TabItem>
<TabItem value="library">

```sh
ts-engine build --library --minify
```

</TabItem>
</Tabs>

## React support

You can build codebases with React and JSX in them.

To support React run the following command:

<Tabs
defaultValue="nodejs"
values={[
{ label: 'Node.js App', value: 'nodejs', },
{ label: 'Library', value: 'library', },
]
}>
<TabItem value="nodejs">

```sh
ts-engine build --node-app --react
```

</TabItem>
<TabItem value="library">

```sh
ts-engine build --library --react
```

</TabItem>
</Tabs>

## Sourcemaps

Sourcemaps are produced for every build regardless whether it is a Node.js application or a library.

## Bundling dependencies

Sometimes it is useful to bundle dependencies into the output file so you can run the file without `node_modules`. This makes it easier to use, share and deploy as it is a single file. You can bundle dependencies into a Node.js application or a library with ts-engine.

<Tabs
defaultValue="nodejs"
values={[
{ label: 'Node.js App', value: 'nodejs', },
{ label: 'Library', value: 'library', },
]
}>
<TabItem value="nodejs">

```sh
ts-engine build --node-app --bundle-dependencies
```

</TabItem>
<TabItem value="library">

```sh
ts-engine build --library --bundle-dependencies
```

</TabItem>
</Tabs>

:::note
Not all packages can be bundled, ts-engine uses Rollup internally and does not support dynamic calls to `require(...)` or circular dependencies, as well as other things.
:::

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
