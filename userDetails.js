const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
    credits:Number,
    stocks:Array,
  },
  {
    collection: "UserInfo",
  }
);

const User=mongoose.model("UserInfo", UserDetailsScehma);
module.exports=User;
