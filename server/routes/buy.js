var express = require('express');
var router = express.Router();
var Buy = require('../models/buy.schema');

router.get('/', function (req, res) {

    Buy.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with buy find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
            // res.sendStatus(200);
        }
    })
});

router.post('/', function (req, res) {
    var addBuy = new Buy(req.body);
    addBuy.save(function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with buy save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

module.exports = router;