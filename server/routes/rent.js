var express = require('express');
var router = express.Router();
var Rent = require('../models/rent.schema');

router.get('/', function (req, res) {
    
    Rent.find({}, function (errorMakingDatabaseQuery, data) {
            if (errorMakingDatabaseQuery) {
                console.log('error with rent find', errorMakingDatabaseQuery);
                res.sendStatus(500);
            } else {
                res.send(data);
                // res.sendStatus(200);
            }
        })
    });
    
router.post('/', function (req, res) {
    var addRent = new Rent(req.body);
    addRent.save(function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with rent save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});


module.exports = router;