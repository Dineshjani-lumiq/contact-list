const mongoose = require('mongoose');

var Employee = mongoose.model('employee', {
     name: { type: String },
   email: { type: String },
    address: { type: String },
    phonenumber: [String],
    message:{type:String}
});

module.exports = { Employee };