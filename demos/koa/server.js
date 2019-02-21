const Koa = require('koa'),
    app = new Koa(), PORT = 3000

app.use(ctx => ctx.body = 'Hello World')

app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`))