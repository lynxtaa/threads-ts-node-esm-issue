# Repro for https://github.com/andywer/threads.js/issues/434

Expected:

```sh
$ npm start
Result is 4
```

Actual:

```sh
$ npm start
/home/alexk/code/threads-ts-node-esm-issue/node_modules/ts-node/dist-raw/node-internal-errors.js:46
  const err = new Error(getErrRequireEsmMessage(filename, parentPath, packageJsonPath))
              ^
/home/alexk/code/threads-ts-node-esm-issue/node_modules/ts-node/dist-raw/node-internal-modules-cjs-loader.js:584
    throw createErrRequireEsm(filename, parentPath, packageJsonPath);
    ^

Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /home/alexk/code/threads-ts-node-esm-issue/src/worker.ts
require() of ES modules is not supported.
require() of /home/alexk/code/threads-ts-node-esm-issue/src/worker.ts from /home/alexk/code/threads-ts-node-esm-issue/[worker eval] is an ES module file as it is a .ts file whose nearest parent package.json contains "type": "module" which defines all .ts files in that package scope as ES modules.
Instead change the requiring code to use import(), or remove "type": "module" from /home/alexk/code/threads-ts-node-esm-issue/package.json.
```
