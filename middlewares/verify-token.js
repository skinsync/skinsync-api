const jwt = require("jsonwebtoken");
const { User } = require("../models");
const dotenv = require("dotenv").config().parsed;

module.exports = async (req, res, next) => {
  //get auth token
  const token = req.headers.authorization;
  if (!token)
    return res.status(401).json({
      message: "Incorrect credential",
    });

  //split token
  const jwtToken = token.split(" ").pop();

  try {
    //verify token
    const data = jwt.verify(jwtToken, dotenv.JWT_SECRET);

    const user = await User.findByPk(data.data.id);

    if (!user)
      return res.status(404).json({
        message: "User not found",
      });

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Incorrect credential",
    });
  }
};
