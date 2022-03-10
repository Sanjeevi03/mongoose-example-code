const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required:true },
  email: { type: String, required:true },
  age: { type: Number, required:true },
  dob: { type: String, required:true },
  job: { type: String, required:true },
  mobile: { type: String, required:true }
});

module.exports = mongoose.model("user",UserSchema)
