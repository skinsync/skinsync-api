const express = require("express");
const User = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = (require("dotenv").config()).parsed

exports.register = async (req, res) => {
  const { body } = req;

  //validasi user input
  if (!body.name || !body.email || !body.password)
    return res.status(400).json({
      message: "Name, email, and password must be provided",
    });

  //cek email have been used
  const isEmailUsed = await User.findOne({
    where: {
      email: body.email,
    },
  });

  if (isEmailUsed) {
    return res.status(400).json({
      message: "Email have been used",
    });
  }

  //encrypt password
  const password = bcrypt.hashSync(body.password, parseInt(dotenv.SALT_ROUND));

  const user = await User.create({
    name: body.name,
    email: body.email,
    password,
  });

  const response = {
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    message: "Account registered successfully",
  }

  return res.json(response);
};

exports.login = async (req, res) => {
  const { body } = req;

  //validasi user input
  if (!body.email || !body.password)
    return res.status(400).json({
      message: "Email and password must be provided",
    });

  //cek email
  const user = await User.findOne({
    where: {
      email: body.email,
    },
  });

  if (!user)
    return res.status(404).json({
      message: "Email not found",
    });

  //cek password correct
  const isPaswordCorrect = bcrypt.compareSync(body.password, user.password);

  if (!isPaswordCorrect)
    return res.status(400).json({
      message: "Wrong password",
    });

  const data = {
    id: user.id,
    name: user.name,
    email: user.email,
    birthdate: user.birthdate,
    profile_picture: user.profile_picture,
    role: user.role,
  };

  const token = jwt.sign({ data }, dotenv.JWT_SECRET, {
    expiresIn: "1d",
  });

  return res.json({
    data,
    token,
    message : "Login success",
  });
};
