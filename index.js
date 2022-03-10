const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { home, getData, addData, updateData, deleteData } = require("./modules/module");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, () =>
  console.log("MongoDB Connected")
);

// HOME PAGE
app.get("/", home);

// GETTING ALL DATA FROM DB
app.get("/get", getData);

// ADDING DATA TO DB
app.post("/add", addData);

// UPDATING DATA IN DB
app.put("/update", updateData);

// DELETING DATA IN DB
app.delete("/delete", deleteData);


// SERVER CONNECTION
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server Started at 8000");
});
