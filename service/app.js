const koa = require('koa')
const dataRouter = require('./fileReader/fileReader')

const app = new koa()

app.use(dataRouter.routes())

app.listen(8080, () => {
    console.log('koa start')
})

module.exports = app
