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
        consultantLastName: consultantInfo.consultantLastName,
        consultantDOB: consultantInfo.consultantDOB,
        consultantVisaStatus: consultantInfo.consultantVisaStatus,
        consultantContactNum: consultantInfo.consultantContactNum,
        consultantEmail: consultantInfo.consultantEmail,
        consultantLocation: consultantInfo.consultantLocation,
        totalYearsOfExpierence: consultantInfo.totalYearsOfExpierence,
        primarySkill: consultantInfo.primarySkill,
        secondarySkill: consultantInfo.secondarySkill,
        consultantDomain: consultantInfo.consultantDomain,
        avilabilityForInPersonInterview: consultantInfo.avilabilityForInPersonInterview,
        bachelorsPassoutUniversityAndYear: consultantInfo.bachelorsPassoutUniversityAndYear,
        mastersPassoutYear: consultantInfo.mastersPassoutYear,
        currentEmployer: consultantInfo.currentEmployer,
        h1bTransfer: consultantInfo.h1bTransfer,
        onsiteAvilability: consultantInfo.onsiteAvilability,
        passportNumber: consultantInfo.passportNumber,
        skypeId: consultantInfo.skypeId,
        avilabilityToStartProject: consultantInfo.avilabilityToStartProject,
        employerDetails: consultantInfo.employerDetails,
        avilabilityForW2Transfer: consultantInfo.avilabilityForW2Transfer,
        additionalComments: consultantInfo.additionalComments

    }).save(function (err, success) {
        if (err) callBack( console.log("error occurred" + err))
        else callBack(success)

    })
}

consultantFun.prototype.getConsultant = function (callBack) {
    console.log("entered the get route..!!!")

    consultantModel.find(function (err, success) {
        if (err) callBack(err)
        else callBack(success)
        console.log(success)
    })
}

consultantFun.prototype.grtReqConsultant = function (findIdInfo,callBack) {
    console.log("entered the get req consultant Api...!!!")
    consultantModel.findById({ _id: findIdInfo.params.Id }, function (err, result) {
        if (err) console.log("error occurred while fetching the data...!!!" + err)
        else callBack(result)
    })

}

module.exports = new consultantFun();
