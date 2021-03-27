const mongoose = require('mongoose');

var Employee = mongoose.model('employee', {
     name: { type: String },
   email: [String],
    address: { type: String },
    phonenumber: [String],
    message:{type:String}
});

module.exports = { Employee };