const deleteUser = require("../services/userServices");
const getAllUsers = require("../services/userServices");
const updateUser = require("../services/userServices");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");

const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/", verifyTokenAndAdmin, getAllUsers);

module.exports = router;
