#!/usr/bin/env node

// Import or destruct stuff
const { cyan, yellow, red } = require('chalk')
const { existsSync, unlinkSync } = require('fs')
const { rmdirsSync, walkSync, fsizeSync } = require('nodejs-fs-utils')
const { join } = require('path')
const { log, error } = console
const { chdir, exit } = process
const { argv } = require('yargs')

const dir = process.argv[2]

const dirSize = () => {
    let size = fsizeSync('./') / 1024

    if (size > 10000) {
        return `${(size / (1024)).toFixed(2)} Mb.`
    } else {
        return `${(size).toFixed(2)} Kb.`
    }
}

// Decided to separate regexps not to get confused
const regexf = /(LICENSE|Makefile|tests?|__tests?__|AUTHORS?|karma.conf.js)$/i
const regexe = /\.((bash|eslint|vim|jshint|nvm)rc|(eslint|npm)ignore|editorconfig|md|ya?ml|markdown|eslintrc.json)$/i

// If you didn't write target folder
if (process.argv.length <= 2) {
    log(`
    Usage: ${cyan('nm_clean <directory>')}

    Arguments:

    nm_clean <directory> -a - Displays deletion process.
    `)
} else {
    // If there's no node_modules directory
    if (!existsSync(`${dir}/node_modules`)) {
        error(
            red(`
        node_modules directory can't be found.
        Please run ${cyan('npm i')} in your project.
            `)
        )
        exit()
    }

    chdir(`${dir}/node_modules`);

    log(`Before: ${yellow(dirSize())}`)

    walkSync('./', (err, path, stats, next, cache) => {
        if (err) throw err
        else if (regexe.test(path) || regexf.test(path)) {
            if (argv.a) log(path)
            stats.isDirectory() ? rmdirsSync(path) : unlinkSync(path)
        } else next()
    })

    log(`After: ${cyan(dirSize())}`)
}