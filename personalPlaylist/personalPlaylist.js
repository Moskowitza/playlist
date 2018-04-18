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

});


function afterConnection() {
    connection.query("SELECT * FROM playlist", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + "|" + res[i].title + "|" + res[i].artist + "|" + res[i].genre + "|");
        }
        console.log("-------------------")
        afterClassicRock()
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
        createPlaylist();
    });
}
function createPlaylist() {
    console.log("Inserting a track into Playlist...\n");
    var query = connection.query(
        "INSERT INTO playlist SET ?",
        {
            title: "Never Had to Knock on Wood",
            artist: "Mighty Mighty Bosstones",
            genre: "Ska"
        },
        function (err, res) {
            console.log(res.affectedRows + " track inserted");
            updatePlaylist();
            // connection.end();

        }
    )
}
function updatePlaylist() {
    console.log("Updating Playlist Superchunk...\n");
    var query = connection.query(
        "UPDATE playlist SET ? WHERE ?",
        [
            {
                genre: "Alternative"

            },
            {
                artist: "Superchunk"
            }
        ],
        //SOMETHING IS WRONG HERE
        function (err, res) {
            console.log(res.affectedRows + " tracks are updated!\n");
            deletePlaylist();
            // connection.end();

        }
    )
}

function deletePlaylist() {
    console.log("Deleting from playlist...\n");
    var query = connection.query("DELETE FROM playlist WHERE ?",
        {
            genre: "Rock"
        },
        function (err, res) {
            console.log(res.affectedRows + " playlist Updated");
            readPlaylist();
        }
    );
}
function readPlaylist(){
    console.log("Selecting all playlist...\n");
  var query = connection.query("SELECT * FROM playlist", function(err,res){
      if (err) throw err;
      //log all results of the SELECT STATEMENT
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + "|" + res[i].title + "|" + res[i].artist + "|" + res[i].genre + "|");
    }
    console.log("-------------------")
      connection.end();
  });
  console.log(query.sql);
}



