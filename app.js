const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const express = require('express')
// 开启一个服务器
const app = express()
// 配置
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 将所有的静态文件统一处理
app.use(express.static(path.join(__dirname, './public')))

// 添加一个处理 get 请求的路由
app.get('/get', (req, res) => {
    res.send({
        msg: '请求成功',
        status: 200
    })
})

app.get('/getData', (req, res) => {
    var arr = [1, 2, 3, 4, 5]
    res.send({
        msg: '请求成功',
        status: 200,
        data: arr
    })
})

app.post('/post', (req, res) => {
    res.send({
        msg: '请求成功',
        status: 200
    })
})

app.listen(3000)