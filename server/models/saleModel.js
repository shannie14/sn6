const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    product: {
        type: String,
    },
    unitsT: {
        type: Number,
    },
    salesT: {
        type: Number,
    },
    units23: {
        type: Number,
    },
    sales23: {
        type: Number,
    },
    units22: {
        type: Number,
    },
    sales22: {
        type: Number,
    },
    units21: {
        type: Number,
    },
    sales21: {
        type: Number,
    },
    units20: {
        type: Number,
    },
    sales20: {
        type: Number,
    },
    brand: {
        type: String,
    },

})

SaleSchema.index({
    product: 'text',
    unitsT: 'number',
    salesT: 'number',
    units23: 'number',
    sales23: 'number',
    units22: 'number',
    sales22: 'number',
    units21: 'number',
    sales21: 'number',
    units20: 'number',
    sales20: 'number',
    brand: 'text',
})

// Mongoose automatically looks for the plural, lowercased version of your model name (1st argument)
const Sale = mongoose.model('sales', SaleSchema);



module.exports = Sale;
