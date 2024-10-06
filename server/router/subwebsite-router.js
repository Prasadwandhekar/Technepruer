const express = require("express");
const getSubWebsites = require("../controllers/subwebsite-controller");
const router = express.Router();

router.route("/SubWebsite").get(getSubWebsites);

module.exports = router;  