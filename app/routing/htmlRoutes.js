var express = require('express');
var path = require("path");


module.exports = function(app) {
    // Sets the route for the index page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // Sets the route for the about page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
}
