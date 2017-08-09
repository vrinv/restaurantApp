var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('order', new Schema({
    phoneNumber: Number,
    items:[],
    restaurant_id: {type:String},
    status:Number,
    paymentStatus:Boolean
}));