// Connect Node to MySQL.
var mysql = require("mysql");

// Statement to use Jaws DB for Heroku, otherwise local mysql connection
if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db",
        port: 3306
    });
};

// Connect and verify
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection.
module.exports = connection;