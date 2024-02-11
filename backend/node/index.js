const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;

mongoose.connect("mongodb://localhost:27017/diploma");

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("users", UserSchema);

app.get("/", (req, res) => {
  UserModel.find({}).then(function (data) {
    res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
