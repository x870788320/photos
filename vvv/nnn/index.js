const express = require('express')
const router = express.Router()
const app = express()
const fs = require('fs')
    // const cors = require('cors');  //后端解决跨域
app.listen(8000, () => {
    console.log("success");
})

let data = [];

fs.readFile("./nnn/picJSON.js", (err, readData) => {
    if (err) {
        console.log(err)
    } else {
        data = JSON.parse(readData.toString())
        console.log('读取数据成功')
    }
})


// app.use(cors());
app.use('/api', router)




router.route('/count').get((req, res) => {
    console.log(req.query)
        // 根据前端传的数据实现按需加载
    let num = req.query.count * req.query.page //已经发送数据数
    let start = req.query.count * (req.query.page - 1)
    let end = data.length >= num ? num : data.length;
    let returnData = JSON.stringify(data.slice(start, end))
    res.send(returnData)
})