---
id: installation
sidebar_label: Installation
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The ts-engine package is available on NPM:

<Tabs
defaultValue="yarn"
values={[
{ label: 'Yarn', value: 'yarn', },
{ label: 'npm', value: 'npm', },
]
}>
<TabItem value="yarn">

```sh
yarn add --dev @ts-engine/cli
```

</TabItem>
<TabItem value="npm">

```sh
npm i -D @ts-engine/cli
```

</TabItem>
</Tabs>

Once installed you'll have access to the `ts-engine` command line tool.

```sh
ts-engine <command> <options>
```
