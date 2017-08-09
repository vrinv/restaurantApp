var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file
var restaurants = require('../models/restaurants'); // get our mongoose model
var orders = require('../models/orders')


var jwtVerify = require('../routes/jwtVerify')

var routes = express.Router()

routes.use(function(req, res, next) {
  jwtVerify(req, res, next)
})

routes.get('/getAllRestaurants', function(req, res) {
  //logic to get list of all restaurants to be displayed on the main page
})

routes.post('/getAllRestaurants', function(req, res) {
  //logic to get list of all restaurants by pincode  or building name to be displayed on the main page

})

routes.post('/getAllitems', function(req, res) {
  //logic to get list of all items from a restaurant to display it as menu on the display page.

})

routes.post('/createOrder', function(req, res) {
  //Logic to create order and submit the order to the database and mapping the same using Restaurants._id
})

routes.post('/searchPastOrders', function(req, res) {
  //Logic to find past orders based on the user mobile number
})

routes.post('/getOrders', function(req, res) {
  //Logic to get orders based on the status of order such as Active/Completed/Rejected 
})

routes.post('/modifyOrder', function(req, res) {
  //Logic to accept or reject the order palced at a restaurant
})

routes.post('/completedOrder', function(req, res) {
  //Logic to complete an order
})


module.exports = routes
