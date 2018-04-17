var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "mysql2018",
    database: "personalPlaylistDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // connection.end();
    afterConnection();
    afterClassicRock()
});


function afterConnection() {
    connection.query("SELECT * FROM playlist", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + "|" + res[i].title + "|" + res[i].artist + "|" + res[i].genre + "|");
        }
        console.log("-------------------")

        connection.end();
    });
}
function afterClassicRock() {
    var query = connection.query("SELECT * FROM playlist WHERE genre=?", ["Classic rock"], function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + "|" + res[i].title + "|" + res[i].artist + "|" + res[i].genre + "|");
        }
        console.log("-------------------")
        // connection.end();
    });
    console.log(query.sql);
}
