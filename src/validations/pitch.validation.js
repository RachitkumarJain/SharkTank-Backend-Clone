/**
 * JOI is popular library for validation.
 */
const Joi = require("joi");


/**
 * Checks request body is in the required format i.e
 * {
 *      "entrepreneur": string,
        "pitchTitle": string,
        "pitchIdea": string,
        "askAmount": number,
        "equity": number
 * }
    and also the askAmount must be greater than 1 and the equity must be less than 100
 */
const pitchBody = Joi.object().keys({
    entrepreneur: Joi.string().required(),
    pitchTitle: Joi.string().required(),
    pitchIdea: Joi.string().required(),
    askAmount: Joi.number().min(1).required(),
    equity: Joi.number().max(100).required()
})

/**
 * Checks request body is in the required format i.e
 * {
        "investor": string,
        "amount": number,
        "equity": number,
        "comment"?: string 
    }
    and also the equity must be less than 100
 */
const investBody = Joi.object().keys({
    investor: Joi.string().required(),
    amount: Joi.number().required(),
    equity: Joi.number().max(100).required(),
    comment: Joi.string()
})

/**
 * Checks if the pitchId is valid MongoDB ObjectId
 * A valid MongoDB ObjectId is the one which is Hexadecimal and 12bytes long so the below regular expression
 * matches the pitchId(MongoDB ObjectId)
 */
const mongoObjectId = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

module.exports = {
    pitchBody,
    investBody,
    mongoObjectId
};