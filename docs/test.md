---
id: test
sidebar_label: Test
title: Test
---

[Jest](https://jestjs.io/) is used to run tests by ts-engine.

## Running tests

By default all files matching `src/.*.test.(js|jsx|ts|tsx)$` are treated as test files.

To run all tests run the following command:

```sh
ts-engine test
```

## Configuring Jest via config file

You can extend and even overwrite the minimal Jest config that ts-engine provides out the box by using a `jest.config.js` file. If it exists then it will be loaded and merged with ts-engine's Jest configuration, with values in `jest.config.js` taking precendence.

For example, to enforce test coverage thresholds you can add the following `jest.config.js` file to your package root directory:

```js title="jest.config.js"
module.exports = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
```

:::note
ts-engine provides it's own `transform` property to the Jest config internally. Overwriting this may affect your compilation when running tests.
:::

## Configuring Jest via CLI

All Jest CLI options are forwarded onto Jest with the exception of `--config`. This means you can easily provide options such as `--watch`.

To run all tests in watch mode run the following command:

```sh
ts-engine test --watch
```

:::note
Custom Jest config support is planned for a future release.
:::
