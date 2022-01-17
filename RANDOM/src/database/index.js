//===[IMPORTING THE DEPENDENCIES (MIDDLEWARE)]==============================
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

//===[IMPORTING FUNCTIONS]=====================================================
const {startDatabase} = require('./src/database/mongo');
const {insertAd, getAds} = require('./src/database/ads');

//===[INSTANTIATING THE APP AS AN EXPRESS OBJECT]==============================
const app = express();

// defining an array to work as the database (temporary solution)
// const ads = [{title: 'Hello, world (again)!'}];

//===[SETTING UP THE MIDDLEWARE]===============================================

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// Enabling CORS for all requests
app.use(cors());

// Adding morgan to log HTTP requests
app.use(morgan('combined'));

//===[DEFINING THE ROUTES]================================================

// THIS GET ENDPOINT IS RESPONSIBLE GETTING ALL THE ADS
app.get('/', async (req, res) => {
    res.send(await getAds());
});

// start the in-memory MongoDB instance
startDatabase().then(async () => {
    await insertAd({title: 'Hello, now from the in-memory database!'});

    // STARTING THE EXPRESS SERVER ON PORT 3000
    app.listen(3000, () => {
    console.log("listening on port 3000");
    });

});


