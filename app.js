// Dependencies
    var express = require("express");
    var bodyParser = require("body-parser");
    var exphbs = require("express-handlebars");

// Express setup
    var app = express();
    var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
    app.use(express.static("public"));

// Parse application body as JSON
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

// Set Handlebars.
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

// Path to static image on index page
app.use(express.static("./public/assets/img")); 

// Import routes and give the server access to them.
    var routes = require("./controllers/burgers_controller.js");
    app.use(routes);

// Set Express server to listen
    app.listen(PORT, function() {
        console.log("Server listening on: http://localhost:" + PORT);
    });

   