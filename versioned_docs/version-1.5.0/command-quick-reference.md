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

# Build library
ts-engine build --library

# Build library in watch mode
ts-engine build --library --watch

# Lint
ts-engine lint

# Lint in auto fix mode
ts-engine lint --fix

# Create new library package
ts-engine new-package --library --name my-lib

# Create new Node.js application package
ts-engine new-package --node-app --name my-app

# Set license of new package
ts-engine new-package --license MIT --library --name my-lib

# Start Node.js application
ts-engine start

# Start Node.js application in watch mode
ts-engine start --watch

# Run tests
ts-engine test

# Run tests with Jest options
ts-engine <jest_options>

# Typecheck
ts-engine typecheck

# Typecheck and emit type declaration files
ts-engine typecheck --emit
```
