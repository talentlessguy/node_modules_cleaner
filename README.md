# NM_Cleaner :recycle:

Cleans node_modules from non code files (e.g. README.md).

## Cleaning Results

| Package Name | `node_modules` before | `node_modules` after |
|--------------|----------------------|-----------------------|
| koa@2.7 | 771.52 Kb | 434.93 |
| express@4.16.4 | 1578.21 Kb | 973.74 Kb |
| fs-extra@7.0.1 | 171.54 Kb | 79.77 Kb |

## Installation

Tested on versions:
| npm | 6.4.1 |
| node | 11.4.0 |

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
* Config & ignore files
* Makefile
* Tests and example directories
* YAML files, for example travis.yml

__and some more in the future...__

## TODO

- [x] Create & publish nm_clean
- [x] Also remove directories
- [ ] Create plugin for Gulp & Webpack
- [ ] Add more file extensions