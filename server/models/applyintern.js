const mongoose = require('mongoose');

const InternshipApplicationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    domain: {
        type: String,
        required: false,
    },
    collegeName: {
        type: String,
        required: true, 
    },
    branch: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    questions: {
        type: String,
        required: false,
    },
   
}, {
    timestamps: true
});

module.exports = mongoose.model('InternshipApplication', InternshipApplicationSchema);
