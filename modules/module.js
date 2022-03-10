const UserModel = require("../models/userModel");
// HOME PAGE
module.exports.home = async (req, res) => {
  res.send({ msg: "Success" });
};

// ADDING DATA TO DB
module.exports.addData = async (req, res, next) => {
  const data = await new UserModel(req.body);
  try {
    await data.save();
    res.send({ res: data, msg: "Data Added Successfully" });
  } catch(err) {
    res.send({ msg: err.message });
  }
};

// GETTING ALL DATA FROM DB
module.exports.getData = async (req, res, next) => {
  const data = await UserModel.find();
  res.send(data);
};

//UPDATING DATA IN DB
module.exports.updateData = async (req, res, next) => {
  const email = req.headers.email;
  const data = await UserModel.updateOne({email:email},{$set:req.body});
  // const data = await UserModel.updateOne({email:email},{$set:{name:req.body.name,job:req.body.job}});
  res.send(data);
};

// DELETING DATA IN DB
module.exports.deleteData = async (req, res, next) => {
  const email = req.headers.email;
  const data = await UserModel.deleteOne({email:email});
  res.send(data);
};


// {
//   "name": "vijay",
//   "email": "vijay@gmail.com",
//   "age": 24,
//   "dob": "02/07/1998",
//   "job": "Finance",
//   "mobile": 9892678424
//   }