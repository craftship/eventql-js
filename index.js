const example = process.argv[2]

require('babel-register')
require(`./examples/${example}`)
