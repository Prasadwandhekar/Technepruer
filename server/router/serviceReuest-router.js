const express = require('express');
const router = express.Router();
const { createServiceRequest } = require("../controllers/serviceRequest-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/service-request").post(authMiddleware,createServiceRequest);

module.exports = router;  









