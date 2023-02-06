const express = require('express')
const { getCampaign, getCampaigns, getGoslings, getBacardi } = require('../controllers/campaignController')

const router = express.Router()

router.get('/', getCampaigns)
router.get('/id', getCampaign)
router.get('/goslings', getGoslings)
router.get('/bacardi', getBacardi)



module.exports = router