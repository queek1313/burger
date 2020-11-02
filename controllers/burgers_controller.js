var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var obj = {
            burgers: data
        };
        res.render("index", obj);
    });
});

router.post("/api/burgers", function(req, res) {
    // console.log(req.body.name);
    burger.insertOne(req.body.name, function(results) {
        res.json( {id: results.insertId })
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    // console.log(id);
    burger.updateOne("devoured", true, id, function(results){
        res.json(results);
    });
});

module.exports = router;