/**
 * Created by david on 2/12/17.
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware');

app.use(middleware.logger);
// this will run the middleware at any route within the app
app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('Sup About Page!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Sup! Express server started!');
    console.log(`Sup! Coming at your from port ${PORT}.`);
});