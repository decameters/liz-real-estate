var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//create a new Schema for movie
var buySchema = new Schema({
    cost: { type: Number, required: true },
    sqft: { type: Number },
    city: { type: String },
},
    { collection : 'buy' }
);

module.exports = mongoose.model('Buy', buySchema);