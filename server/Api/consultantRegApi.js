var express = require('express');
var router = express.Router();
var passport = require('passport');

var consultantModel = require('../models/consultantRegister');

var consultantFun = function () {

};

consultantFun.prototype.addConsultant = function (consultantInfo, callBack) {
    console.log("entered the API..!!")
    console.log(consultantInfo);
    new consultantModel({
        consultantName: consultantInfo.consultantName,
        //file: consultantInfo.file;
    })

}


module.exports = new consultantFun();