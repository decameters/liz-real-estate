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

// router.get('/:id', function (req, res) {
//     console.log(req.params.id);
    
//     Movie.find({_id : req.params.id}, function (errorMakingDatabaseQuery, data) {
//         if (errorMakingDatabaseQuery) {
//             console.log('error with movie find', errorMakingDatabaseQuery);
//             res.sendStatus(500);
//         } else {
//             res.send(data);
//             console.log(data);
            
//         }
//     })
// });

// router.post('/', function (req, res) {
//     var addMovie = new Movie(req.body);
//     addMovie.save(function(errorMakingDatabaseQuery, data){
//         if (errorMakingDatabaseQuery) {
//             console.log('error with movie save', errorMakingDatabaseQuery);
//             res.sendStatus(500);
//         } else {
//             res.sendStatus(201);
//         }
//     });
// });

module.exports = router;