const express = require('express');
const router = express.Router();
const intern = require("../controllers/intership-controller")

router.route("/internship").get(intern.getAllInternship);  
router.route("/internship/preview/:id").get(intern.getInternshipById);  


module.exports = router;  







  

