---
id: command-quick-reference
sidebar_label: Command quick reference
title: Command quick reference
---

```sh
# Print available commands and their options
ts-engine --help

# Print version
ts-engine --version

# Build Node.js application
ts-engine build --node-app

# Build Node.js application in watch mode
ts-engine build --node-app --watch

# Build Node.js application with react
ts-engine build --node-app --react

# Build library
ts-engine build --library

# Build library in watch mode
ts-engine build --library --watch

# Build library in with react
ts-engine build --library --react

# Lint
ts-engine lint

# Lint in auto fix mode
ts-engine lint --fix

# Lint with react
ts-engine lint --react

# Create new library package
ts-engine new-package --library --name my-lib

# Create new library package with react
ts-engine new-package --library --react --name my-lib

# Create new Node.js application package
ts-engine new-package --node-app --name my-app

# Create new Node.js application package with react
ts-engine new-package --node-app --react --name my-app

# Start Node.js application
ts-engine start

# Start Node.js application in watch mode
ts-engine start --watch

# Start Node.js application with react
ts-engine start --react

# Run tests
ts-engine test

# Run tests with react
ts-engine test --react

# Run tests with Jest options
ts-engine <jest_options>

# Typecheck
ts-engine typecheck

# Typecheck and emit type declaration files
ts-engine typecheck --emit

# Typecheck and watch for changes
ts-engine typecheck --watch
```
