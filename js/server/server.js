/**
* server.js
* (C) Nick Rabb 2016
* Nick Rabb <nrabb@outlook.com>
* The main server file for Nick Rabb's Public REST
* API.
*/

/*jslint node:true */
'use strict';

// VARIABLES
// ======================================

var db = require('./mysql-connect.js');
var 
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var version = "0.1";
var dbInstance = 'localDev';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    var allowedOrigins = dbInstance === 'serverDev' ? ['http://ricknabb.github.io'] : ['localhost'];
    var origin = req.headers.origin;

    // Set allowed access origins
    if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
   }

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Port to listen on
var port = process.env.PORT || 8080;

// ROUTING
// =======================================

var router = express.Router();

// Routes for /v1/
router.get('/', function (req, res, next) {
    res.json({ message: "Hello world!" });
});
router.get('/version', function (req, res, next) {
    res.json({ message: "Version " + version });
});

// Routes for /v1/blog/
router.route('/blog/post')
  .post(function (req, res, next) {
    var title = req.body.title,
        bodyURL = req.body.bodyURL,
        author = req.body.author,
        tags = req.body.tags;
    if (title === undefined || bodyURL === undefined || author === undefined || tags === undefined) {
      res.json({success: false, message: "You were missing one or more body parameters."});
    }
  });

app.use('/v1', router);

// START SERVER
// =======================================

app.listen(port);
console.log("Nick Rabb's public API v" + version + " started...");
db.connect(dbInstance, function() {

});
