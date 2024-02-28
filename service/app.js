const koa = require('koa')
const dataRouter = require('./data/data')

const app = new koa()

app.use(dataRouter.routes())

app.listen(8080, () => {
    console.log('koa start')
})

module.exports = app
