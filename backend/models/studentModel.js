const mongoose = require("mongoose");



const studentSchema = new mongoose.Schema({

    id: {
       type: String,
       required: true 
    },
    name: {
        type: String,
        required: true
    },

    studentClass: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    guardian: {
        type: String,
        required: true
    },

    number: {
        type: Number,
        required: true,
    }


})

module.exports = mongoose.model("student", studentSchema);