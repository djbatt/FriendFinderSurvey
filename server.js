var express = require("express");

const path = require("path");

var bodyParser = require("body-parser")

var app = express();
var port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, "./app/public")))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);

app.listen(port, function() {
    console.log(`App listening on port: ${port}`);
})