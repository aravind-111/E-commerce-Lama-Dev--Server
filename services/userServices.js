const cryptoJS = require("crypto-js");
const User = require("../models/User");

// UPDATE USER
const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = cryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).send(updatedUser);
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(500).send("Password is not valid");
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User details deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};

// GET ALL USERS
const getAllUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = updateUser;
module.exports = deleteUser;
module.exports = getAllUsers;
