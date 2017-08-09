// Requiring all the modules that will be used in the simple server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var config = require('./config')
var registrationLogin = require('./routes/registrationLogin')
var jwtVerify = require('./routes/jwtVerify')
var restaurants = require('./routes/restaurantRoutes/routes')
var user = require('./routes/userRoutes/routes')

var port = process.env.PORT || 8000; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database


// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

app.use('/',registrationLogin)
app.use('/restaurants', restaurants);
app.use('/user', user);


app.listen(port);
console.log('Use API routes http://localhost:' + port);
