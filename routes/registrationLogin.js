//These routes will be used for registration and Login , here
// we would register the user and authenticate the user and generate the token
// the token will be supplied to the user.`

var express = require('express');
var registrationLogin = express.Router();
var mongoose = require('mongoose');
var user = require('../models/restaurants')
var jwt    = require('jsonwebtoken'); 
var superSecret = require('../config')

registrationLogin.post('/registration', function(req, res) {
  //Logic for registration of restaurant

})

registrationLogin.post('/login', function(req, res) {
  //Logic for Login and sending the token
})

module.exports = registrationLogin;
