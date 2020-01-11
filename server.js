const express = require ("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

let PORT = process.env.PORT || 8080;

let app = express();

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});