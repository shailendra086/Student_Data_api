const mongoose = require('mongoose');

const StudentSchema =  new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    father : {
        type : String,
        required : true,
        unique : true

    },
    mother : {
        type : String,
        required : true,
        unique : true

    },
    dob : {
        type : Date,
        required : true,
        unique : true

    },
    course : {
        type : String,
        required : true,

    },
    mobile: {
        type : Number,
        required : true,
        unique : true

    },
    email: {
        type : String,
        required : true,
        unique : true

    }
})

const Student = mongoose.model('Student',StudentSchema);
module.exports = Student;