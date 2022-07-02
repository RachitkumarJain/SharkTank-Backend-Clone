const mongoose = require('mongoose');

/**
 * Helper Mongoose Schema so that when a shark make a invest we can use this schema to help add
 * accurate data required by the application.
 */
const investorSchema = mongoose.Schema({
    investor: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    equity: {
        type: Number,
        required: true
    },
    comment: {
        type: String
    }
});

// const Investor = mongoose.model("Investor", investorSchema);

// module.exports.Investor = Investor;
module.exports.investorSchema = investorSchema;