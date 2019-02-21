#!/usr/bin/env node

const { cyan, yellow } = require('chalk')
const { existsSync, unlinkSync } = require('fs')
const { fsizeSync, walkSync, rmdirsSync } = require('nodejs-fs-utils')
const { log, error } = console
const { chdir, exit, argv } = process

const dir = argv[2]
let isSilent = true

if (argv[3] === '-p') isSilent = false

const dirSize = () => (fsizeSync('./') / 1024).toFixed(2)

const regex = /(LICENSE|Makefile|tests?|__tests?__|examples?)|(\.(md|doc|ya?ml|conf.js|config|markdown|nvmrc|config.js|eslintrc.json|flow)|rc|ignore|config)$/i

if (process.argv.length <= 2) {
    log(`
    Usage: ${cyan('nm_clean <directory>')}

    Arguments:

    nm_clean <directory> -p - Displays deletion process.
    `)
} else {
    if (!existsSync(`${dir}/node_modules`)) {
        error(
            yellow(`
        node_modules directory can't be found.
        Please run ${cyan('npm i')} in your project.
        
            `)
        )
        exit()
    }
    
    chdir(`${dir}/node_modules`)
    
    log(`Before: ${yellow(dirSize())} Kb`)

    walkSync('./', {
        skipErrors: false,
        logErrors: false,
        stackPushEnd: true
    }, (err, path, stats, next) => {
            if (!err && regex.test(path)) {
                isSilent ? null : log(path)
                stats.isDirectory() ? rmdirsSync(path) : unlinkSync(path)
            } else {
                next()
            }
        })
    
    log(`After: ${cyan(dirSize())} Kb`)
}