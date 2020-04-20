---
id: react-support
sidebar_label: React support
title: React support
---

## Configure React babel preset

[React](https://reactjs.org/) is supported via the use of ts-config's React babel preset.

Install ts-engine's React babel preset:

```sh
yarn add --dev @ts-engine/babel-preset-react
```

Add an `babel.config.js` file in your packages root directory:

```ts
module.exports = {
  presets: ["@ts-engine/babel-preset-react"],
  // your config goes here
};
```
