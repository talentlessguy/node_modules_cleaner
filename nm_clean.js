const { unlinkSync, statSync, existsSync } = require('fs')
const readdir = require('recursive-readdir-sync')
const { cyan, red } = require('chalk')
const { log, error } = console

const regex = /(LICENSE|Makefile)|(\.(md|doc|bashrc|eslintrc|babelrc))$/i

const getSize = file => statSync(file).size / 1024

if (process.argv.length <= 2) {
    log(cyan(`
    Usage:
    nm_clean <project>
    `))
} else {
    process.chdir(process.argv[2])

    // Check if node_modules exists
    if (!existsSync('./node_modules')) {
        error(
            red(`
        node_modules directory can't be found.
        Please run npm i in your project.
            `)
        )
        process.exit()
    }

    const files = readdir('./node_modules')
    const trash = files.filter(file => regex.test(file))

    // Calculate size of each file
    let oldSize = 0
    files.map(file => oldSize += getSize(file))
    log(`Before: ${oldSize.toFixed(2)} Kb`)

    // Clean from trash
    trash.map(file => unlinkSync(file))

    // Recalculate sizes
    const cleaned = readdir('./node_modules')
    let newSize = 0
    cleaned.map(file => newSize += getSize(file))

    log(`After: ${newSize.toFixed(2)} Kb`)
}