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

//Campari
const getCampari = async (req, res) => {

    const campari = await Campaign.find({ client: 'Campari' })

    res.status(200)
        .json(campari)
}

//Diageo
const getDiageo = async (req, res) => {

    const Diageo = await Campaign.find({ client: 'Diageo' })

    res.status(200)
        .json(Diageo)
}

//Goslings
const getGoslings = async (req, res) => {

    const goslings = await Campaign.find({ client: 'Goslings' })

    res.status(200)
        .json(goslings)
}

//Jeffersons
const getJeffersons = async (req, res) => {

    const jeffersons = await Campaign.find({ client: 'Jeffersons (Pernod Ricard)' })

    res.status(200)
        .json(jeffersons)
}

//Dobel
const getDobel = async (req, res) => {

    const dobel = await Campaign.find({ client: 'Maestro Dobel' })

    res.status(200)
        .json(dobel)
}

//Stranahans
const getStranahans = async (req, res) => {

    const stranahans = await Campaign.find({ client: 'Stranahans' })

    res.status(200)
        .json(stranahans)
}

//Royalsalute
const getRoyalsalute = async (req, res) => {

    const royalsalute = await Campaign.find({ client: 'Royal Salute' })

    res.status(200)
        .json(royalsalute)
}

//Waterford
const getWaterford = async (req, res) => {

    const waterford = await Campaign.find({ client: 'Waterford' })

    res.status(200)
        .json(waterford)
}

//Whiskey Wash
const getWash = async (req, res) => {

    const wash = await Campaign.find({ client: 'wash' })

    res.status(200)
        .json(wash)
}

module.exports = {
    getCampaign,
    getCampaigns,
    getBacardi,
    getCampari,
    getDiageo,
    getGoslings,
    getJeffersons,
    getDobel,
    getStranahans,
    getRoyalsalute,
    getWaterford,
    getWash,

}