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
    buildingName: {type:String},
    buildingAddress:[],
    pincode:{type:Number},
    floor:{type:Number},
    restaurantName:{type:String},
    password:{type:String},
    menu:[],
    phoneNumber:{type:Number}
    
});


module.exports = mongoose.model('restaurants', restaurants);