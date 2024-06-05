const User = require("../models").User;
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config().parsed;

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: [
        "id",
        "name",
        "password",
        "email",
        "gender",
        "birthdate",
        "profile_picture",
      ],
    });
    res.json({
      data: user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(
        req.body.password,
        parseInt(dotenv.SALT_ROUND)
      );
    }

    const [updated] = await User.update(req.body, {
      where: { id: req.user.id },
    });

    if (!updated) return res.status(404).json({ error: "User not found" });
    const updatedRecord = await User.findByPk(req.user.id, {
      attributes: [
        "id",
        "name",
        "password",
        "email",
        "gender",
        "birthdate",
        "profile_picture",
      ],
    });

    const response = {
      data: updatedRecord,
      message: "Profile updated",
    };
    res.status(200).json(response);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
