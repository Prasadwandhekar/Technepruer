const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
   
    photoUrl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    domain: {
        type: String,
        required: true,
    },
   
    languages: [String],
    certifications: [String],
    duration: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    mentors: [String],
    startDate: {
        type: Date,
        required: true,
    },
    feedbackSupport: String,
    courseLanguage: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Internship', InternshipSchema);
