const Sale = require('../models/saleModel')

//get single sale
const getSale = async (req, res) => {
    const { id } = req.params

    const sale = await Sale.findById(id)

    if (!sale) {
        return res.status(404).json({ error: 'Salenot found' })
    }
    res.status(200).json(brand)
}

//get all sales
const getSales = async (req, res) => {
    const sales = await Sale.find({}).sort()

    res.status(200).json(sales)
}

//Goslings
const getGoslings = async (req, res) => {

    const goslings = await Sale.find({ brand: 'goslings' })

    res.status(200)
        .json(goslings)
}

const getGoslingsSales = async (req, res) => {
    const GSales = await Sale.find({ product: 'GOSLINGS' })
    res.status(200)
        .json(GSales)
}


//Bacardi
const getBacardi = async (req, res) => {

    const bacardi = await Sale.find({ brand: 'bacardi' })

    res.status(200)
        .json(bacardi)
}

//Campari
const getCampari = async (req, res) => {

    const campari = await Sale.find({ brand: 'campari' })

    res.status(200)
        .json(campari)
}

module.exports = {
    getSale,
    getSales,
    getCampari,
    getGoslings,
    getGoslingsSales,
    getBacardi,
}