const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const abc = new mongoose.Schema({
  name: String,
  password: String,
});
abc.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});
const User = mongoose.model("MernAuth", abc);
module.exports = User;
