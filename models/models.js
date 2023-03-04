const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  points: Number,
});

const userModel = mongoose.model("Users", userSchema);

module.exports = { userModel };
