var express = require('express');
var router = express.Router();
var passport = require('passport');
var mangoose = require('mongoose');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload')
var multer = require('multer')
var consultantModel = require('../models/consultantRegister');
var consultantApi = require('../Api/consultantRegApi');

//const storage = require('multer-gridfs-storage')({
//    url: 'mongodb://localhost:27017/dataedge'
//});

//const upload = multer({ storage: storage });
//var storage = multer.diskStorage({
//    destination: function (req, file, callBack) {
//        callBack(null, '/tmp/my-uploads')
//    },
//    filename: function (req, file, cb) {
//        cb(null, file.fieldname + '-' + Date.now())
//    }
//})
//upload.single('fileName'),

//router.use(fileUpload())

router.post('/registerConsultant', function (req, res) {
    console.log("entered the r egister consultant route..!!")      
    console.log(req.body)
    consultantApi.addConsultant( req.body, function (success) {
        console.log("entered the client api..!!")
             res.send("successfully added member......!!!!")
        })
})

router.get('/getConsultantDetails', function (req, res) {
    consultantApi.getConsultant(function (result) {
        res.send(result)
    })
})

router.get('/getReqConsultantDetails/:Id', function (req, res) {
    console.log("entered the grtReqConsultant route...!!!")
    consultantApi.grtReqConsultant(req,function (result) {
      res.send(result)
    })

})

router.delete('/deleteReqClient/:Id', function (req, res) {
    console.log("entered the delete route..!!")
    consultantApi.deleteReqClient(req, function (err,result) {
        if (err) console.log("error occurred...!!!")
        else res.send("Deleted Consultant Successfully..!!")
    })

})


    module.exports = router;