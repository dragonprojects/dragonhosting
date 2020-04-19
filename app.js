// Libraries
var express = require("express");
var bodyParser = require("body-parser");
var sanitizeHtml = require('sanitize-html');

// Accept POST requests
express().use(bodyParser.urlencoded({extended : true}));
express().post("/dragonhosting/submit", function(request, response) {
  console.log(request.body); // This prints the JSON document received (if it is a JSON document)
  var dirtyHtml = request.body;
  var cleanHtml = sanitizeHtml(dirty); // Sanitise HTML the user has inputted
});

// Start the server
express().listen(8080);
