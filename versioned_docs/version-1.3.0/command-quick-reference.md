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

# Run tests
ts-engine test

# Run tests with Jest options
ts-engine <jest_options>

# Typecheck
ts-engine typecheck

# Typecheck and emit type declaration files
ts-engine typecheck --emit
```
