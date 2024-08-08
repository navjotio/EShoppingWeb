const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection with mongoDB Atlas
mongoose.connect(
  "mongodb+srv://nav2016:nav2016@cluster0.byyhid6.mongodb.net/e-commerce"
);

// API Creation
app.get("/", (req, res) => {
  res.send("Express app is running");
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`server running on port ${port}`);
  } else {
    console.log(`Error ${error}`);
  }
});

// Image Storage Engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, res, cb) => {
    return cb(
      null,
      `${file.filename}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// creating upload endpoint for images
app.use("./images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// servers issues , not able to send the snapshot , forbidden by the peer
// server issues with the internet
// Servver issues with the code 9
//
