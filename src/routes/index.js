const express = require("express");

const pitchRoute = require("./pitch.route");
const router = express.Router();

/**
 * Send all the requests starting with "http://localhost:8081/pitches/" to /src/routes/pitch.route.js
 */
router.use("/pitches", pitchRoute)
module.exports = router;
