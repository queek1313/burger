var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js")


var app = express();

app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});