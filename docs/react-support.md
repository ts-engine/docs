---
id: react-support
sidebar_label: React support
title: React support
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Configure React babel preset

[React](https://reactjs.org/) is supported via the use of ts-config's React babel preset.

Install ts-engine's React babel preset:

<Tabs
defaultValue="yarn"
values={[
{ label: 'Yarn', value: 'yarn', },
{ label: 'npm', value: 'npm', },
]
}>
<TabItem value="yarn">

```sh
yarn add --dev @ts-engine/babel-preset-react
```

</TabItem>
<TabItem value="npm">

```sh
npm i -D @ts-engine/babel-preset-react
```

</TabItem>
</Tabs>

Add a `babel.config.js` file in your packages root directory:

```ts title="babel.config.js"
module.exports = {
  presets: ["@ts-engine/babel-preset-react"],
  // your config goes here
};
```
