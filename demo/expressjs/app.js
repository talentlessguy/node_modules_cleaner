const app = require('express')()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(80)