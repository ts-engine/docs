---
id: command-quick-reference
sidebar_label: Command quick reference
title: Command quick reference
---

## Building

### Node.js application

```sh
ts-engine build --node-app

# watch mode
ts-engine build --node-app --watch

# with react
ts-engine build --node-app --react

# typecheck
ts-engine build --node-app --typecheck
```

### Library

```sh
ts-engine build --library

# watch mode
ts-engine build --library --watch

# with react
ts-engine build --library --react

# typecheck and emit types
ts-engine build --library --typecheck --emit
```

## Linting

```sh
ts-engine lint

# fix fixable issues
ts-engine lint --fix

# with react and a11y rules
ts-engine lint --react
```

## Make new packages

### Node.js application

```sh
ts-engine new-package --node-app --name my-app

# with react
ts-engine new-package --node-app --react --name my-app
```

### Library

```sh
ts-engine new-package --library --name my-lib

# with react
ts-engine new-package --library --react --name my-lib
```

## Start Node.js applications

```sh
ts-engine start

# watch mode
ts-engine start --watch

# typecheck
ts-engine start --typecheck

# with react
ts-engine start --react
```

## Running tests

```sh
ts-engine test

# with react
ts-engine test --react

# with Jest options
ts-engine <jest_options>
```

## Typechecking

```sh
ts-engine typecheck

# emit type declaration files
ts-engine typecheck --emit

# watch mode
ts-engine typecheck --watch
```

## Options

```sh
# Print available commands and their options
ts-engine --help

# Print version
ts-engine --version
```
