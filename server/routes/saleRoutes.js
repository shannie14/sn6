const express = require('express')
const { getSale, getSales, getGoslings, getGoslingsSales, getBacardi, getCampari } = require('../controllers/saleController')
const Sale = require('../models/saleModel')

const router = express.Router()

router.get('/', getSales)
router.get('/id', getSale)
router.get('/goslings', getGoslings)
router.get('/goslings/sales', getGoslingsSales)
router.get('/bacardi', getBacardi)
router.get('/campari', getCampari)



module.exports = router