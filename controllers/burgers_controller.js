const express = require("express");
const burger = require("../models/burger.js")
const router = express.Router();

router.get("/",function (req, res){
    res.redirect("/index")
});

router.get("/index", function(req, res){
    burger.all(function(results){
        const burgerObj={
            burgers:results
        };
        res.render("index", burgerObj)
    });
});
router.post("/api/burgers", function(req ,res){
    burger.create(["burger_name"],[req.body.burger_name],function(result){
        res.json({id:result.insertId});
    });
})
router.put("/api/burgers/:id", function(req,res){
    var con = req.params.id;
    burger.update({
        devoured: req.body.devoured},
        con, function(result){
            if (result.changeRows == 0){
                return res.status(404).end();
            }else{
                res.status(200).end();
            }
        });
});


module.exports = router;