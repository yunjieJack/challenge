const Router = require('koa-router')
const csvPath = '../data/Mobile_Food_Facility_Permit.csv'
const path = require('path')
const fs = require('fs')
const router = new Router()
const comma = '!@#$%^&uhi*()'
const csvToJson = (filePath) => {
    return new Promise(async (res) => {
        const convertedArray = []
        const file = await fs.readFileSync(path.join(__dirname, filePath))
        const GBK = new TextDecoder('gbk').decode(file).split('\n')
        const propertyName = GBK.shift().split(',')
        GBK.forEach(lineData => {
            const dataArray = lineData.replace(/"(.*?)"/g, (str) => str.replaceAll(',', comma)).split(',')
            if (dataArray.length > 1) {
                const obj = {}
                dataArray.forEach((property, index) => {
                    obj[propertyName[index]] = property.replaceAll(comma, ',').replaceAll('"', '')
                })
                convertedArray.push(obj)
            }
        })
        res(convertedArray)
    })
}

const readed = csvToJson(csvPath)

const fileReader = async (ctx) => {
    const query = ctx.query;
    let fileJson = await readed
    if(query.name) {
        fileJson = fileJson.filter(i => i.Applicant.includes(query.name))
    }
    if (query.type) {
        fileJson = fileJson.filter(i => i.Status === query.type)
    }
    ctx.body = JSON.stringify(fileJson)
}

router.get('/data', fileReader)

module.exports = router
