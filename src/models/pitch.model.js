const mongoose = require('mongoose');
const {investorSchema} = require('./investor.model');

/**
 * Mongoose Schema to store all the pitch in the required manner with 
 * the timestamp(will store CreatedAt and UpdatedAt) fields 
 */
const pichtSchema = mongoose.Schema({
    entrepreneur: {
        type: String,
        required: true
    },
    pitchTitle: {
        type: String,
        required: true
    },
    pitchIdea: {
        type: String,
        required: true
    },
    askAmount: {
        type: Number,
        required: true
    },
    equity: {
        type: Number,
        required: true
    },
    offers: {
        type: [investorSchema],
        default: []
    }
}, { timestamps: true });

const Pitch = mongoose.model("Pitch", pichtSchema);

module.exports.Pitch = Pitch;