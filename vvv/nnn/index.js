const express = require('express')
const router = express.Router()
const app = express()
// const cors = require('cors');  //后端解决跨域
import data from "./picJSON.js"
app.listen(8000, () => {
    console.log("success");
})


// app.use(cors());
app.use('/api', router)




router.route('/count').get((req, res) => {
    console.log(req.query)
   // 根据前端传的数据实现按需加载
    let num = req.query.count * req.query.page                      //已经发送数据数
    let start = req.query.count * (req.query.page - 1)
    let end = data.length >= num ? num :data.length;
    let returnData = JSON.stringify(data.slice(start, end))
    res.send(returnData)
})
