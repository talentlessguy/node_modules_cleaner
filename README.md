# node_modules Cleaner :recycle:

Cleans node_modules from non code files (e.g. README.md).

## Cleaning Results

| Package Name | `node_modules` before | `node_modules` after |
|--------------|----------------------|-----------------------|
| koa@2.7 | 771.52 Kb | 472.83 Kb |
| express@4.16.4 | 1578.21 Kb | 1053.57 Kb |
| fs-extra@7.0.1 | 171.54 Kb | 79.78 Kb |

## Installation

```sh
npm i -g nm_clean

# or
yarn global add nm_clean
```

## Usage

```sh
nm_clean <project_folder>
```

## Demo

Switch to `demo` folder. Then run `npm i`. Then return back to root directory and run `node nm_clean demo`.

Quick commands:

```sh
cd demos
cd koa && npm i && cd ../
node nm_clean.js
```

Demo uses `koa`, `express` and `fs-extra` packages for demonstration.