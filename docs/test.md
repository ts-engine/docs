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

## Configuring Jest

All Jest CLI options are forwarded onto Jest with the exception of `--config`. This means you can easily provide options such as `--watch`.

To run all tests in watch mode run the following command:

```sh
ts-engine test --watch
```

> **Custom Jest config support is planned for a future release.**
