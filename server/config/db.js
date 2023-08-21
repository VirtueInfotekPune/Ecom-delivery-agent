const sqlite3 = require('sqlite3').verbose();

// Specify the path to your SQLite database file
// const DBSource = "../../server/db.sqlite3";
const DBSource = "../server/db.sqlite3";
// const DBSource = "../../server/db.sqlite3";
// import abc from "../../server/db.sqlite3";

const db = new sqlite3.Database(DBSource, (err) => {
  if (err) {
    console.log(">>>>>");
    // console.error(err.message);
    console.log(err);
    return;
  } else {
    // console.log("error in db");
    console.log('Connected to the SQLite database.');
  }
});

module.exports = db;
