var express = require('express');
var bodyParser = require('body-parser');

var mongooseConnection = require('./modules/mongoose-connection');
var buy = require('./routes/buy');

var app = express();
var port = process.env.PORT || 5000;


// MIDDLEWARE
app.use(bodyParser.json());
app.use(express.static('server/public'));
mongooseConnection.connect();

// EXPRESS ROUTES
app.use('/buy', buy);

app.listen(port, function(){
    console.log('listening on port', port);  
});