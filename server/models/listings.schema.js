var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//create a new Schema for movie
var listingSchema = new Schema({
    cost: { type: Number, required: true },
    sqft: { type: Number },
    city: { type: String }
});

module.exports = mongoose.model('Listing', listingSchema);