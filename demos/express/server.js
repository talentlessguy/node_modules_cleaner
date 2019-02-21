const app = require('express')(), PORT = 3000

app.get('/', (req, res) => res.send('Hello World'))

app.listen(PORT, () => `Listening on localhost:${PORT}`)