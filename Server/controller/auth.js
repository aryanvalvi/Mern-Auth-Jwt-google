const User = require("../model/modelSchema");
const bcrypt = require("bcrypt");
const auth = async (req, res) => {
  try {
    const { username, password } = await req.body;
    const prevdata = await User.findOne({ name: username });
    if (prevdata) {
      res.send("already in databas");
    }
    const newdata = new User({
      name: username,
      password: password,
    });
    await newdata.save();
    console.log("data is added in the db", newdata);
    await res.send(newdata);
    //   console.log(userData);
  } catch (error) {
    console.log(error);
  }
};
module.exports = auth;
