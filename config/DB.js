const mongoose = require("mongoose");

const connection = async () => {
  try {
    //add your database string
    await mongoose.connect("mongodb://0.0.0.0:27017/IP_Tracker");
    console.log("Database connected");
  } catch (error) {
    console.log("Connection failed", error);
  }
};

module.exports = connection;
