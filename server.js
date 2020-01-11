const express = require ("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

let PORT = process.env.PORT || 8080;
let app = express();

//Static Routes

app.use(express.static("public"));

//Body Parser Element

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Template Engine Connection
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller")
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

