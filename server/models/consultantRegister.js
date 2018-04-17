var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var consultantDetails = new Schema({
    consultantName: String,
    consultantLastName: { unique: true, type: String, index: true },
    consultantDOB: Date,
    consultantVisaStatus: String,
    consultantLocation: String,
    consultantContactNum: Number,
    consultantEmail: String,
    totalYearsOfExpierence:Number,
    primarySkill: String,
    secondarySkill: String,
    consultantDomain: String,
    avilabilityForInPersonInterview: String,
    bachelorsPassoutUniversityAndYear: String,
    mastersPassoutYear: String,
    currentEmployer: String,
    h1bTransfer: String,
    onsiteAvilability: String,
    passportNumber: String,
    skypeId: String,
    avilabilityToStartProject: String,
    employerDetails: String,
    avilabilityForW2Transfer: String,
    additionalComments: String

})

consultantDetails.plugin(passportLocalMongoose);

module.exports = mongoose.model('ConsultantDetails', consultantDetails);
