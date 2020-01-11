const express = require("express");
const burger = require("../models/burger");

//Get Router
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data){
        let hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });
});

//Post Router


//Delete Router


//Put Router