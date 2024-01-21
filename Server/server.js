const express = require("express");
const app = express();
const router = require("./routes/Gandu");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

//middleware
app.use(express.json());

//routes
app.use("/api/auth/", router);

//database connection
const ganduDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

ganduDb();
//listening on port
app.listen(5000, () => {
  console.log("server is running on port 3000");
});
