---
id: lint
sidebar_label: Lint
title: Lint
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[ESLint](https://eslint.org/) is the primary tool that powers linting in ts-engine.

## Linting code

To lint code run the following command:

```sh
ts-engine lint
```

## Auto fixing lint issues

Some linting issues are automatically fixable.

To auto fix linting issues run the following command:

```sh
ts-engine lint --fix
```

## Extending ESLint config

ESLint config does not need to be provided to ts-engine, however it is possible to extend the config it uses.

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

Add an `.eslintrc` file in your packages root directory:

```ts title=".eslintrc"
{
  "extends": "@ts-engine/eslint-config",
  "rules" {
    // your rules go here
  }
}
```
