const InternshipApplication = require('../models/applyintern');

const postInternshipApplication = async (req, res) => {
    const { username, email, mobile, collegeName, branch, duration, gender, department, year, questions,domain } = req.body;

    try {
        const newApplication = new InternshipApplication({
            username,
            email,
            mobile,
            collegeName,
            branch,
            duration,
            gender,
            department,
            year,
            questions,
            domain,
        });

        const application = await newApplication.save();
        res.status(201).json(application);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { postInternshipApplication,};
