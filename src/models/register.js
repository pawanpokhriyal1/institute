const mongoose = require('mongoose');

// Define the schema
const registerSchema = new mongoose.Schema({
    institute_type: {
        type: String,
        required: true,
        enum:['Playhouse','School','College','Competitive Exam Center']
    },
    board: {
        type: String,
        enum: ['GSAB', 'CBSE']
    },
    medium: {
        type: String,
        enum: ['English', 'Hindi']

    },
    class: {
        type: String,
        enum: ['Pre-primary', 'Primary','Secondary','Higher Secondary']
    },
    standard: {
        type: String,
    },
    subject: {
        type: String,
    }
    ,
    university: {
        type: String,
    },
    degree: {
        type: String,
    },
    exam_type: {
        type: String,
    }
    ,
    createdAt: {
        type: Date,
        default: Date.now
    }
},{
    timestamps:true
});

// Create the model
const Registration = mongoose.model('register_forms', registerSchema);

module.exports = Registration;