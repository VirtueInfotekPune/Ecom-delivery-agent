const db = require("../config/db");
// const { updateQuantityById } = require("../models/inventoryModel");

// exports.updateStock = (req, res) => {
//   const { id, quantity } = req.body;
//   const sql = "UPDATE inventory SET quantity = ? WHERE id = ?";
//   const params = [quantity, id];
//   db.run(sql, params, function (err) {
//     if (err) {
//       console.error(err.message);
//       res.status(500).json({ message: "Failed to update quantity." });
//     } else {
//       res.status(200).json({ message: "Quantity updated successfully." });
//     }
//   });
// };

exports.getAllProducts = (req, res) => {
  db.all('SELECT * FROM "order"', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(rows);
    }
  });
};


exports.createOrder = (req, res) => {
  const { item_name, address, phone_number, customer_name } = req.body;

  db.run(
    'INSERT INTO "order" (item_name, address, phone_number, customer_name) VALUES (?, ?, ?, ?)',
    [item_name, address, phone_number, customer_name],
    function (err) {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to create product" });
      } else {
        res.status(201).json({ message: "Order created successfully" });
      }
    }
  );
};


// exports.getOrderDetails = (req, res) => {
//   const orderId = req.params.id;

//   // Retrieve order details from the database based on the orderId
//   db.get("SELECT * FROM `order` WHERE id = ?", [orderId], (err, order) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: "Failed to fetch order details" });
//     } else {
//       // Additional order details
//       const orderDetails = {
//         id: order.id,
//         item_name: order.item_name,
//         address: order.address,
//         phone_number: order.phone_number,
//         customer_name: order.customer_name,
//         // Include any other required order details
//       };

//       res.status(200).json(orderDetails);
//     }
//   });
// };
// exports.createOrder = (req, res) => {
//   const { title, quantity } = req.body;
  
//   db.run(
//     "INSERT INTO order (item_name, address, phone_number, customer_name) VALUES (?, ?, ?, ?)",
//     [item_name, address, phone_number, customer_name],
//     function (err) {
//       if (err) {
//         console.error(err.message);
//         res.status(500).json({ error: "Failed to create order" });
//       } else {
//         res.status(201).json({ message: "Order created successfully" });
//       }
//     }
//   );
// };