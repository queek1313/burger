var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js")
var path = require('path')

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// express.static(path.join(__dirname, 'public'))
app.use(routes);


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});