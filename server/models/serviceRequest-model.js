const mongoose = require('mongoose');

const ServiceRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    domain: {
        type: String,
        required: true,
        enum: ['Web Development', 'App Development', 'Digital Marketing', 'Graphic Design', 'Video Editing', 'Documentation'],
    },
    durationTimeForProject: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
       
    dateForMeeting: {
        type: Date,
        required: true,
    },
    timeForMeeting: {
        type: String,   
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('ServiceRequest', ServiceRequestSchema);
