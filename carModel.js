const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name : String,
    description : String
});

const carSchema = new mongoose.Schema({
    maker : String,
    model : String,
    price : Number,
    year : Number,
    body_type : String,
    sale_status : String,
    mileage : Number, 
    details : {
        doors : Number,
        exteriorColor : String,
        interiorColor : String,
        driveTrainDescription : String,
        fuelDescription : String,
        engineDescription : String,        
        transmission : String
    },
    location : {
        address: String,
        city : String,
        zip : String
    },
    tags : [tagSchema]
})

const carModel = mongoose.model('car', carSchema, 'cars');

module.exports = carModel;
