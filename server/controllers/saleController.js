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

// const getGoslingsSales = async (req, res) => {
//     const GSales = await Sale.find({ product: 'GOSLINGS' })
//     res.status(200)
//         .json(GSales)
// }

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

//Diageo
const getDiageo = async (req, res) => {

    const diageo = await Sale.find({ brand: 'diageo' })

    res.status(200)
        .json(diageo)
}

//Jeffersons
const getJeffersons = async (req, res) => {

    const jeffersons = await Sale.find({ brand: 'jeffersons' })

    res.status(200)
        .json(jeffersons)
}

//Dobel
const getDobel = async (req, res) => {

    const dobel = await Sale.find({ brand: 'dobel' })

    res.status(200)
        .json(dobel)
}

//Stranahans
const getStranahans = async (req, res) => {

    const stranahans = await Sale.find({ brand: 'stranahans' })

    res.status(200)
        .json(stranahans)
}

//Royalsalute
const getRoyalsalute = async (req, res) => {

    const royalsalute = await Sale.find({ brand: 'royal' })

    res.status(200)
        .json(royalsalute)
}

//Waterford
const getWaterford = async (req, res) => {

    const waterford = await Sale.find({ brand: 'waterford' })

    res.status(200)
        .json(waterford)
}

//Wash
const getWash = async (req, res) => {

    const wash = await Sale.find({ brand: 'wash' })

    res.status(200)
        .json(wash)
}
module.exports = {
    getSale,
    getSales,
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