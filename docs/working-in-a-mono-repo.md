---
id: working-in-a-mono-repo
sidebar_label: Working in a mono repo
title: Working in a mono repo
---

# ESLint IDE support

To provide ESLint IDE support for every package in a mono repo you only need to provide the ESLint config once in the root of the mono repo and not in every package individually.

Install ts-engine's default eslint config in your mono repo's root package:

```sh
# Yarn workspaces example
yarn add --dev -W @ts-engine/eslint-config
```

To fix this add an `.eslintrc` file in your mono repo's root directory:

```ts
{
  "extends": "@ts-engine/eslint-config"
}
```
