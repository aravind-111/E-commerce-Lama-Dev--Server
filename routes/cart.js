const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../routes/verifyToken");
const {
  createCart,
  updateCart,
  deleteCart,
} = require("../services/cartServices");

const router = require("express").Router();

router.post("/", verifyToken, createCart);
router.put("/:id", verifyTokenAndAuthorization, updateCart);
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);
module.exports = router;
