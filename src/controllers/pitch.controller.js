const { Pitch } = require('../models');
const httpStatus = require('http-status');

/**
 * Controller to Fecth all the Pitches and Handle edge-case scenarios to avoid failure of your application 
 *
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 * @returns HTTP Response
 * 
 * Examples
 * 
 * HTTP 404 NOT_FOUND 
 * {
 *      "message": "Invalid Request"
 * }
 * 
 * HTTP 200 OK
 * [{
 *      "id": string,
 *      "entrepreneur": string,
        "pitchTitle": string,
        "pitchIdea": string,
        "askAmount": number,
        "equity": number,
        "offers": [
            {
                "id": string
                "investor": string,
                "amount": number,
                "equity": number,
                "comment": string 
            }
        ]   
 * }]
 */
const getPitches = async(req, res,next) => {
    console.log(Pitch);
    const pitches = await Pitch.find().sort({createdAt: -1});
    console.log(pitches);
    if(pitches == null) {
        return res.status(httpStatus.NOT_FOUND).send({
            message: "Invalid request"
        });
    } 
    return res.status(httpStatus.OK).send(pitches.map(pitch => {
        return {
            id: pitch._id,
            entrepreneur: pitch.entrepreneur,
            pitchTitle: pitch.pitchTitle,
            pitchIdea: pitch.pitchIdea,
            askAmount: pitch.askAmount,
            equity: pitch.equity,
            offers: pitch.offers.map(offer => {
                return {
                    id: offer._id,
                    investor: offer.investor,
                    amount: offer.amount,
                    askAmount: offer.askAmount,
                    equity: offer.equity,
                    comment: offer.comment
                };
            })
        };
    }));
}

/**
 * Controller to Fecth single Pitch corresponding to pitchId equal to _id 
 * and Handle edge-case scenarios to avoid failure of your application 
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 * @returns HTTP Response
 * 
 * Examples
 * 
 * HTTP 404 NOT_FOUND 
 * {
 *      "message": "Invalid Request"
 * }
 * 
 * HTTP 200 OK
 * {
 *      "id": string,
 *      "entrepreneur": string,
        "pitchTitle": string,
        "pitchIdea": string,
        "askAmount": number,
        "equity": number,
        "offers": [
            {
                "id": string
                "investor": string,
                "amount": number,
                "equity": number,
                "comment": string 
            }
        ]   
 * }
 */

const getPitch = async(req, res, next) => {
    const pitchId = req.params.pitchId;
    const pitch = await Pitch.findById(pitchId);   
    if(pitch == null) {
        return res.status(httpStatus.NOT_FOUND).send({
            message: "Invalid request"
        });
    }
    return res.status(httpStatus.OK).send({
        id: pitch._id,
        entrepreneur: pitch.entrepreneur,
        pitchTitle: pitch.pitchTitle,
        pitchIdea: pitch.pitchIdea,
        askAmount: pitch.askAmount,
        equity: pitch.equity,
        offers: pitch.offers.map(offer => {
            return {
                id: offer._id,
                investor: offer.investor,
                amount: offer.amount,
                askAmount: offer.askAmount,
                equity: offer.equity,
                comment: offer.comment
            };
        })
    });
}

/**
 * Controller to post a new Pitch and Handle edge-case scenarios to avoid failure of your application 
 *  
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 * @returns HTTP Response
 * 
 * Examples
 * 
 * HTTP 502 BAD_GATEWAY 
 * {
 *      "message": "Unable to process Request, Please try again later"
 * }
 * 
 * HTTP 201 CREATED
 * {
 *      "id": string
 * }
 * 
 */
const addPitch = async(req, res, next) => {
    console.log(req.body);
    const pitch = await Pitch.create(req.body); 
    if(pitch == null) {
        return res.status(httpStatus.BAD_GATEWAY).send({
            message: "Unable to process Request, Please try again later"
        });
    }
    return res.status(httpStatus.CREATED).send({
        id: pitch._id
    });
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 * @returns HTTP Response
 * 
 * Example 
 * 
 * HTTP 404 NOT_FOUND 
 * {
 *      "message": "Invalid Request"
 * }
 * 
 * HTTP 201 CREATED
 * {
 *      "id": string
 * }
 */
const makeOffer = async(req, res, next) => {
    const pitchId = req.params.pitchId;
    const pitch = await Pitch.findById(pitchId);
    if(pitch == null) {
        return res.status(httpStatus.BAD_REQUEST).send({
            message: "Invalid Request"
        });
    }
    pitch.offers.push(req.body);
    await pitch.save();
    return res.status(httpStatus.CREATED).send({
        id: pitch._id
    });
}

module.exports = {
    getPitches,
    getPitch,
    addPitch,
    makeOffer
};