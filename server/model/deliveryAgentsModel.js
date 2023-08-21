const db = require("../config/db");

// exports.updateQuantityById = (id, quantity, callback) => {
//   db.run(
//     "UPDATE inventory SET quantity = ? WHERE id = ?",
    
//     [quantity, id],
//     function (err) {
//       if (err) {
//         return console.error(err.message);
//       }
//       console.log(`Row(s) updated: ${this.changes}`);
//       callback();
//     }
//   );
// };

  exports.getInventory = (id, uom, callback) => {
    db.run(
      "SELECT * FROM inventory",
      // [uom, id],
      function (err) {
        if (err) {
          return console.error(err.message);
        }
        console.log(`Row(s) updated: ${this.changes}`);
        callback();
      }
    );
  };
