const Router = require('koa-router')
const csv = require('csvtojson/v2')
const csvPath = '/table.csv'
const pathS = require('path')


const router = new Router()

const csvToJson = (path) => {
    return new Promise(async (res) => {
        let result = await csv().fromFile(pathS.join(__dirname, path))
        res(result)
    })
}

const data = async (ctx) => {
    console.log('get!')
    let fileJson = await csvToJson(csvPath)
    ctx.body = JSON.stringify(fileJson)
}

router.get('/data', data)

module.exports = router
