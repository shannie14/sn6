const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

// const brandEndpoints = require('./routes/brandRoutes');
const saleEndpoints = require('./routes/saleRoutes')
const campaignEndpoints = require('./routes/campaignRoutes')

//express app
const app = express()

//middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'client')));


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for req
        app.listen(process.env.PORT, () => (
            console.log('Welcome to SK server', process.env.PORT)
        ))
    })
    .catch((error) => {
        console.log(error)
    })

//endpoints
// app.use('/brands', brandEndpoints)
app.use('/sales', saleEndpoints)
app.use('/campaigns', campaignEndpoints)

