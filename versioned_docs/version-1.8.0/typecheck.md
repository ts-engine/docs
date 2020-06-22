---
id: typecheck
sidebar_label: Typecheck
title: Typecheck
---

[TypeScript](https://www.typescriptlang.org/) is used when typechecking code.

## Typecheck code

To typecheck code run the following command:

```sh
ts-engine typecheck
```

## Emit types for libraries

When building a library it is good practice to ship types with it too for consumers who use TypeScript.

To emit type declaration files run the following command:

```sh
ts-engine typecheck --emit
```

Type files will be outputted into `dist/` for each file that is included in the build tree, so if `main.ts` imported `print.ts` then `print.ts` would also have a type definition file.

| Entry files    | Output files      |
| -------------- | ----------------- |
| `src/main.ts`  | `dist/main.d.ts`  |
| `src/print.ts` | `dist/print.d.ts` |

## Watching for changes

The typecheck command also supports watching for changes to source code and rerunning typecheck automatically when changes occur.

To typecheck and trigger watch mode run the following command:

```sh
ts-engine typecheck --watch
```
