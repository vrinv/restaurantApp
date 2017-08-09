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

routes.get('/fetchMenu', function(req, res) {
  //logic for restaurants to get all the items from the menu
})

routes.post('/addItem', function(req, res) {
  //logic to add item in restaurent menu

})

routes.post('/deleteItem', function(req, res) {
  //Logic to delete item from the restaurant menu
})

routes.post('/modifyItem', function(req, res) {
  //Logic to modify item from the restaurant menu
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
