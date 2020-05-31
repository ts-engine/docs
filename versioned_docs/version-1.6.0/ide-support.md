---
id: ide-support
sidebar_label: IDE support
title: IDE support
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## ESLint

An ESLint config file is not required for ts-engine to lint code, however without a file IDE's won't know which linting issues to highlight.

Install ts-engine's default eslint config:

<Tabs
defaultValue="yarn"
values={[
{ label: 'Yarn', value: 'yarn', },
{ label: 'npm', value: 'npm', },
]
}>
<TabItem value="yarn">

```sh
yarn add --dev @ts-engine/eslint-config
```

</TabItem>
<TabItem value="npm">

```sh
npm i -D @ts-engine/eslint-config
```

</TabItem>
</Tabs>

To fix this add an `.eslintrc` file in your packages root directory:

```ts title=".eslintrc"
{
  "extends": "@ts-engine/eslint-config"
}
```
