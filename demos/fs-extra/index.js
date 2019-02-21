const { outputFileSync } = require('fs-extra')

process.chdir('demos/fs-extra')

outputFileSync('file.txt', 'Hello World!')