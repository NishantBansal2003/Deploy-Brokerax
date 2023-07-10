const jwt = require("jsonwebtoken");
const User = require("../userDetails.js");
const dotenv = require("dotenv");

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log(decoded);
    const user = await User.findOne({
      _id: decoded.userId,
    });
    if (!user) throw new Error("please authenticate");
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: e.message });
  }
};

module.exports = auth;
