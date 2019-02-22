# NM_Cleaner :recycle:

Cleans node_modules from non code files (e.g. README.md).

[WARNING] This utility is unstable and not production-ready.

## Cleaning Results

| Package Name | `node_modules` before | `node_modules` after |
|--------------|----------------------|-----------------------|
|create-react-app@2.1.5 | 101 Mb | 98 Mb |
| koa@2.7 | 772 Kb | 720 Kb |

## Installation

Tested on versions:
npm: 6.4.1
node: 11.4.0

I'm not sure if nm_clean works on older versions, so please update to latest or use these versions.

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

```sh

# Koa
npm run test:koa

# Express
npm run test:express

# FS Extra
npm run test:fs-extra
```

Demo uses `koa`, `express` and `fs-extra` packages for demonstration.

## How it works

**nm_clean** goes recursively through node_modules, then picks unnessesary files and deletes them. Yes, so simple.

## Supported extensions & directories

* Markdown files
* License files
* Every file ending with 'rc'
* 'ignore' files
* Makefile
* Tests and example directories
* YAML files, for example travis.yml

__and some more in the future...__

## TODO

- [x] Create nm_clean
- [x] Also remove directories
- [ ] Publish the package
- [ ] Create plugin for Gulp
- [ ] Add more file extensions
