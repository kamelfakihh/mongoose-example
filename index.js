const mongoose = require('mongoose');
const carModel = require('./carModel.js');

//  require('dotenv').config()
const dotenv = require('dotenv');
dotenv.config();

// const DB_NAME = process.env.DB_NAME;
// const DB_PORT = process.env.DB_PORT;
// const DB_HOST = process.env.DB_HOST;

const {DB_NAME , DB_PORT, DB_HOST} = process.env;

const uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
mongoose.connect(uri);
const db = mongoose.connection;

db.once('open', async function(){

    console.log("connected to database !");

    const cars = await carModel.find(
        {
            "tags.name" : {
                $in : ["Single Owner"]
            }
        },
        {
            tags : 1
        }
    ).count();    

    console.log(cars)
})