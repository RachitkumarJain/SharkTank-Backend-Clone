const Joi = require('joi');
const httpStatus = require("http-status");

/**
 * 
 * Validate request body with respect to the JOI Schema defined in the validation file
 * 
 * @param {JoiSchema} schema 
 * @returns express.NextFunction
 *
 */
const validateBody = (schema) => (req, res, next) => {
  const result = schema.validate(req.body);
  if(result.error) {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: "Invalid data provided"
    });

  } 
  return next();
}

/**
 * Validate request params with respect to the JOI Schema defined in the validation file
 * 
 * @param {JOISchema} schema 
 * @returns express.NextFunction
 */
const validatePitchId = (schema) => (req, res, next) => {
  const result = schema.validate(req.params.pitchId);
  if(result.error) {
    return res.status(httpStatus.NOT_FOUND).send({
      message: "Invalid request"
    });
  }

  return next();
}

module.exports = {
  validateBody,
  validatePitchId
};