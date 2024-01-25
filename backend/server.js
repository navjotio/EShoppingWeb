const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
PORT = 8081;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "login",
});

// db.connect((err) => {
//   if (err) {
//     console.error("Database Connection failed", err);
//   } else {
//     console.log("Connected to MySQL database");
//   }
// });

app.post("/login", (req, res) => {
  const sql = "INSERT INTO signupform (`Name`, `Email`, `Password`) Values(?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
