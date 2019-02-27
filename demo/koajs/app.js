const Koa = require('koa'), app = new Koa()

app.use(async ctx => ctx.body = 'Hello World!').listen(80)

// ready on http://localhost