---
id: ide-support
sidebar_label: IDE support
title: IDE support
---

## ESLint

An ESLint config file is not required for ts-engine to lint code, however without a file IDE's won't know which linting issues to highlight.

Install ts-engine's default eslint config:

```sh
yarn add --dev @ts-engine/eslint-config
```

To fix this add an `.eslintrc` file in your packages root directory:

```ts
{
  "extends": "@ts-engine/eslint-config"
}
```
