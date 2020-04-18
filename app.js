// Libraries
var express = require("express");
var body-parser = require("body-parser");

// Accept POST requests
express().use(body-parser.urlencoded({extended : true}));
express().post("/dragonhosting/submit", function(request, response) {
  console.log(request.body); //This prints the JSON document received (if it is a JSON document)
});

// Start the server
express().listen(8080);
