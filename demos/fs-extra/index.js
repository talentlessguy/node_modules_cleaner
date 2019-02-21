const { readJSONSync } = require('fs-extra')

console.log(readJSONSync('./package.json'))