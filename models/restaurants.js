var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurant = new Schema({
    email: {
        type: String,
        Required: 'Required to link Tasks'
    },
    name: {
        type: String,
        Required: 'Kindly enter the name of the task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: true
    },
    buildingName: { type: String },
    buildingAddress: { type: String },
    pincode: { type: Number },
    floor: { type: Number },
    restaurantName: { type: String },
    password: { type: String, required: 'Enter password' },
    menu: [{
        price: { type: Number },
        product_name: { type: String },
        tax: { type: String }
    }],
    phoneNumber: { type: Number, required: 'Enter Phone no.' }

});


module.exports = mongoose.model('restaurant', restaurant);