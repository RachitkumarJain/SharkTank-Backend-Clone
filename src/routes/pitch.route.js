const express = require("express");
const {pitchController} = require("../controllers");
const {validateBody, validatePitchId} = require("../middlewares/validate");
const pitchValidation = require("../validations/pitch.validation");
 
const router = express.Router();

/**
 * handle all the request needed in xharktank, and also validate the request and pitchId before 
 * retrieving/adding the data from/to the Database
 */
router.get('/', pitchController.getPitches);
router.get('/:pitchId', validatePitchId(pitchValidation.mongoObjectId) ,pitchController.getPitch);
router.post('/' ,validateBody(pitchValidation.pitchBody), pitchController.addPitch);
router.post('/:pitchId/makeOffer', validatePitchId(pitchValidation.mongoObjectId), validateBody(pitchValidation.investBody) , pitchController.makeOffer);


module.exports = router;