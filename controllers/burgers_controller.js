const express = require("express");
const burger = require("../models/burger");

//Get, Post, and Delete Router Function
const router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data){
        let hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });

    router.post("/api/burgers", function(req, res){
        burger.create(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function(result) {
                res.json({ id: result.insertID });
            }
        );
    });

    router.put("/api/burgers/:id", function(req, res) {
        let condition = "id = " + req.params.id;
        
        console.log("condition", condition);
        burger.update({ devoured: req.body.devoured }, condition, function(
            result
        ) {
            if ((result, changedRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

    router.delete("/api/burgers/:id", function(req, res) {
        let condition = "id = " + req.params.id;
        console.log("condition", condition);

        burger.delete(condition, function(result) {
            if((result, changedRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});

//Export Routercondition
 
module.exports = router;



