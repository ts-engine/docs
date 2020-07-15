---
id: start
sidebar_label: Start
title: Start
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Starting a Node.js application

The start command builds and starts a Node.js application in a single action.

To start a Node.js application run the following command:

```sh
ts-engine start
```

:::note
The build will be identical to that produced by running `yarn ts-engine build --node-app`.
:::

## Watching for changes

The start command also supports watching for changes to source code and rebuilding and restarting your Node.js application automatically when changes occur.

To start and trigger watch mode run the following command:

```sh
ts-engine start --watch
```

:::note
If the build fails following changes then the running application is not stopped.
:::

:::note
The running application is stopped by sending the signal `SIGTERM` following changes.
:::

## Forwarding arguments

Arguments can be forwarded onto the Node.js application by using the `--args` option. All arguments following `--args` will be forwarded.

Forward args onto the Node.js application by running the following command:

<Tabs
defaultValue="not-watch"
values={[
{ label: 'Not watch mode', value: 'not-watch', },
{ label: 'Watch mode', value: 'watch', },
]
}>
<TabItem value="not-watch">

The arguments `--one --two=value file.txt` will be forwarded.

```sh
ts-engine start --args --one --two=value file.txt
```

</TabItem>
<TabItem value="watch">

The arguments `--one --two=value file.txt` will be forwarded.

```sh
ts-engine start --watch --args --one --two=value file.txt
```

</TabItem>
</Tabs>

## Minifying output

By default the build output is not minified. [Terser](https://github.com/terser/terser) is used to minify code if you provide the minify option.

To minify the output run the following command:

```sh
ts-engine start --minify
```

## Typecheck post build

By default a typecheck is not performed during a build, there is a specific [typecheck](./typecheck.md) for that. You can do this with the typecheck option.

To typecheck post build run the following command:

```sh
ts-engine start --typecheck
```

You can also provide --emit option on the start command if you want to produce types definition files from your node app.

To typecheck and emit type definition files post build run the following command:

```sh
ts-engine start --typecheck --emit
```

## React support

You can run codebases with React and JSX in them.

To support React run the following command:

```sh
ts-engine start --react
```

## Bundling dependencies

The start command supports building the Node.js application and bundling its dependencies. [See the build docs for more information](./build#bundling-dependencies).

You can bundle dependencies by running the following command:

```sh
ts-engine start --bundle-dependencies
```

:::note
The build will be identical to that produced by running `yarn ts-engine build --node-app --bundle-dependencies`.
:::
