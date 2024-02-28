const Router = require('koa-router')
const csv = require('csvtojson')
const csvPath = '/table.csv'
const pathS = require('path')


const router = new Router()

const csvToJson = (path) => {
    return new Promise(async (res) => {
        let result = await csv.fromFile(pathS.join(__dirname, path))
        console.log(result)
    })
    // \n or \r\n depending on the EOL sequence
    // const lines = csv.split('\n');
    // const delimeter = ',';
    //
    // const result = [];
    // const headers = lines[0].split(delimeter);
    // for (const line of lines) {
    //     const obj = {};
    //     const row = line.split(delimeter);
    //     for (let i = 0; i < headers.length; i++) {
    //         const header = headers[i];
    //         obj[header] = row[i];
    //     }
    //     result.push(obj);
    // }
    // // Prettify output
    // return JSON.stringify(result, null, 2);
}

const data = async (ctx) => {
    console.log('get!')
    let file = await csvToJson(csvPath)
    console.log(file)
    ctx.body = [1,2,3]
}

router.get('/data', data)

module.exports = router
