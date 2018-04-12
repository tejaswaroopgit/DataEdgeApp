var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var consultantDetails = new Schema({
    consultantName: { unique: true, type: String, index: true },
    

})

consultantDetails.plugin(passportLocalMongoose);

module.exports = mongoose.model('ConsultantDetails', consultantDetails);
