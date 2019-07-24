# NM_Cleaner 🧹

Cleans node_modules from non code files (e.g. README.md).

A very useful tool when transfering the project to offline environment.

## Cleaning Results

| Package Name | `node_modules` before | `node_modules` after |
|--------------|----------------------|-----------------------|
| create-react-app@2.1.5 | 101 Mb | 85.74 Mb |
| koa@2.7 | 737.30 Kb | 420.88 Kb |
| express@4.6.14 | 1548.30 Kb | 971.91 Kb |

## Installation

### Requirements

* node >= 11.1
* yarn >= 1.13

```sh
npm i -g nm_cleaner

# or
yarn global add nm_cleaner
```

## Usage

Just clean the node_modules in a project directory.

```sh
nm_clean <project_folder>
```

Show files that are deleted.

```sh
nm_clean <project_folder> -a
```

## Demo

```sh
mkdir nm_clean-demo
cd nm_clean-demo
npm init -y
npm i koa
nm_clean ./ -a
```

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
* Unnesesary config files such as .editorconfig

__and some more in the future...__

## TODO

- [x] Create nm_clean
- [x] Also remove directories
- [x] Publish the package
- [ ] Add timers to count how many seconds it took to clean
- [ ] Make everything async for better perfomance
- [ ] Create plugin for Gulp & Webpack
- [ ] Add more file extensions
