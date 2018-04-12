var express = require('express');
var router = express.Router();
var passport = require('passport');
var mangoose = require('mongoose');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload')
var multer = require('multer')
var consultantModel = require('../models/consultantRegister');
var consultantApi = require('../Api/consultantRegApi');



const storage = require('multer-gridfs-storage')({
    url: 'mongodb://localhost:27017/dataedge'
});

const upload = multer({ storage: storage });
//var storage = multer.diskStorage({
//    destination: function (req, file, callBack) {
//        callBack(null, '/tmp/my-uploads')
//    },
//    filename: function (req, file, cb) {
//        cb(null, file.fieldname + '-' + Date.now())
//    }
//})

router.use(fileUpload())

router.post('/registerConsultant', upload.single('fileName'), function (req, res) {
    console.log(req.file)
    console.log("entered the r egister consultant route..!!")
    new consultantModel({
        consultantName: req.body.consultantName
    }).save(function (success) {
       
         console.log("successfully add file..!!")

    })
    //console.log(req.file).
    //consultantApi.addConsultant(req.file, req.body, function () {
    //        console.log("entered the client api..!!")
    //    })
})


    module.exports = router;