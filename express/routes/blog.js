var express = require('express')
var router = express.Router()
const {getList,getDetail,newBlog,updateBlog,delBlog} = require('../controller/blog')
const {SuccessModel, ErrorModel} = require('../model/resModel')

router.get('/list',function (req, res, next) {
    let author = req.query.author
    let keyword = req.query.keyword

    const result = getList(author, keyword)
    return result.then(listData => {
        res.json(new SuccessModel(listData))
    })
})

module.exports = router
