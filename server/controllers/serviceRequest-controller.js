const ServiceRequest = require('../models/serviceRequest-model');

const createServiceRequest = async (req, res) => {
    try {
        const { name, mobile, email, domain, durationTimeForProject, budget, dateForMeeting,timeForMeeting } = req.body;

        const serviceRequest = new ServiceRequest({
            name,
            mobile,  
            email,
            domain,
            durationTimeForProject,
            budget,
            dateForMeeting,
            timeForMeeting
        });

        await serviceRequest.save();
        res.status(201).json({ message: 'Service request created successfully', serviceRequest });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create service request', error });
    }
};  
  
module.exports ={ createServiceRequest };