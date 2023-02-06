const express = require('express')
const { getBrand, getBrands } = require('../controllers/brandController')

const router = express.Router()

router.get('/', getBrands)
router.get('/:id', getBrand)


module.exports = router