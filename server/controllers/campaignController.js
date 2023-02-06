const Campaign = require('../models/campaignModel')

//get single sale
const getCampaign = async (req, res) => {
    const { id } = req.params

    const campaign = await Campaign.findById(id)

    if (!campaign) {
        return res.status(404).json({ error: 'Campaign not found' })
    }
    res.status(200).json(campaign)
}

//get all sales
const getCampaigns = async (req, res) => {
    const campaigns = await Campaign.find({}).sort()

    res.status(200).json(campaigns)
}

//Bacardi
const getBacardi = async (req, res) => {

    const bacardi = await Campaign.find({ client: 'Bacardi' })

    res.status(200)
        .json(bacardi)
}

//Goslings
const getGoslings = async (req, res) => {

    const goslings = await Campaign.find({ client: 'Goslings' })

    res.status(200)
        .json(goslings)
}

module.exports = {
    getCampaign,
    getCampaigns,
    getGoslings,
    getBacardi,
}