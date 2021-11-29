const router = require("express").Router();
const UserSchema = require("../models/User");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new UserSchema({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await UserSchema.findOne({ username: req.body.username });
    !user && res.status(401).send("Invalid Credentials");

    //   DECRYPT
    const hashedPassword = cryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(cryptoJS.enc.Utf8);

    //   is wrong password sending error
    originalPassword !== req.body.password &&
      res.status(401).send("Invalid Credentials");

    // creating jwt token
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    //   sending result to ui
    const { password, ...others } = user._doc;
    res.status(200).send({ ...others, accessToken });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
