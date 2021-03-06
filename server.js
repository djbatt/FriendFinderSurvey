var express = require("express");

const path = require("path");

var app = express();
var port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, "./app/public")))

var bodyParser = require("body-parser")

require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function() {
    console.log(`App listening on port: ${port}`);
})