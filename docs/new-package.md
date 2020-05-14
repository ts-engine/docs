---
id: new-package
sidebar_label: New package
title: New package
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Create new packages automatically that have ts-engine preconfigured.

## Setup

It makes sense to install `@ts-engine/cli` globally so you can use this command anywhere. However when leveraging commands like `build` and `lint` etc we strongly recommend installing it into the consuming package and not using the globally installed version.

<Tabs
defaultValue="yarn"
values={[
{ label: 'Yarn', value: 'yarn', },
{ label: 'npm', value: 'npm', },
]
}>
<TabItem value="yarn">

```sh
yarn global add @ts-engine/cli
```

</TabItem>
<TabItem value="npm">

```sh
npm i -g @ts-engine/cli
```

</TabItem>
</Tabs>

## Create a new package

You can create both Node.js application and library packages using a single command. The command will create a folder using the packages name and then create `package.json` and `src/main.ts` within it and install `@ts-engine/cli` into the package as a dev dependency.

<Tabs
defaultValue="nodejs"
values={[
{ label: 'Node.js App', value: 'nodejs', },
{ label: 'Library', value: 'library', },
]
}>
<TabItem value="nodejs">

```sh
ts-engine new-package --node-app --name @examples/node-app
```

</TabItem>
<TabItem value="library">

```sh
ts-engine new-package --library --name @examples/library
```

</TabItem>
</Tabs>

:::note
The scope is not included in the folder name, so `@examples/node-app` would generate the folder `node-app`.
:::

## Setting the license

The new package's license can optionally be set when creating a package via the `--license` option.

<Tabs
defaultValue="nodejs"
values={[
{ label: 'Node.js App', value: 'nodejs', },
{ label: 'Library', value: 'library', },
]
}>
<TabItem value="nodejs">

```sh
ts-engine new-package --node-app --license MIT --name @examples/node-app
```

</TabItem>
<TabItem value="library">

```sh
ts-engine new-package --library --license MIT --name @examples/library
```

</TabItem>
</Tabs>

:::note
The license will default to `UNLICENSED` if one is not provided.
:::
