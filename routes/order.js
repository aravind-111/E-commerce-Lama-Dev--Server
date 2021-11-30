const {
  createOrder,
  deleteOrder,
  updateOrder,
  getAllUserOrder,
  getAllOrder,
} = require("../services/orderServices");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");

const router = require("express").Router();

router.post("/post", verifyTokenAndAdmin, createOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.get("/:userId", verifyTokenAndAuthorization, getAllUserOrder);
router.get("/", verifyTokenAndAdmin, getAllOrder);

module.exports = router;
