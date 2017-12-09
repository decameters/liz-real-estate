var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rentSchema = new Schema({
    rent: { type: Number, required: true },
    sqft: { type: Number },
    city: { type: String },
},
    { collection : 'rent' }
);

module.exports = mongoose.model('rent', rentSchema);