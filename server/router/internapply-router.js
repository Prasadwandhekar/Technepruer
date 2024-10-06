const express = require('express');
const router = express.Router();
const {postInternshipApplication} = require("../controllers/applyintern-controller")
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/internship/apply").post(authMiddleware,postInternshipApplication);


module.exports = router;  

     





  

