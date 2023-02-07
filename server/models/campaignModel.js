const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    client: {
        type: String,
    },
    campaign: {
        type: String,
    },
    date: {
        type: String,
    },
    live: {
        type: String,
    },
    emails: {
        type: Number,
    },
    imp_min: {
        type: Number,
    },
    view_min: {
        type: Number,
    },
    imp_total: {
        type: Number,
    },
    view_total: {
        type: Number,
    },
    imp_g: {
        type: Number,
    },
    view_g: {
        type: Number,
    },
    imp_meta: {
        type: Number,
    },
    view_meta: {
        type: Number,
    }, signup: {
        type: Number,
    },

})


// Mongoose automatically looks for the plural, lowercased version of your model name (1st argument)
const Campaign = mongoose.model('campaigns', CampaignSchema);



module.exports = Campaign;
