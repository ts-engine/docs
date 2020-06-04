---
id: working-in-a-mono-repo
sidebar_label: Working in a mono repo
title: Working in a mono repo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ESLint IDE support

To provide ESLint IDE support for every package in a mono repo you only need to provide the ESLint config once in the root of the mono repo and not in every package individually.

Install ts-engine's default eslint config in your mono repo's root package:

```sh
# Yarn workspaces example
yarn add --dev -W @ts-engine/eslint-config
```

<Tabs
defaultValue="yarn-workspaces"
values={[
{ label: 'Yarn Workspaces', value: 'yarn-workspaces', },
{ label: 'Lerna', value: 'lerna', },
]
}>
<TabItem value="yarn-workspaces">

```sh
yarn add --dev -W @ts-engine/eslint-config
```

</TabItem>
<TabItem value="lerna">

```sh
npm i -D @ts-engine/eslint-config
```

</TabItem>
</Tabs>

To fix this add an `.eslintrc` file in your mono repo's root directory:

```ts title=".eslintrc"
{
  "extends": "@ts-engine/eslint-config"
}
```
