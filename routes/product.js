const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
} = require("../services/producetService");

const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

router.post("/post", verifyTokenAndAdmin, createProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.get("/", getAllProducts);
router.get("/find/:id", getSingleProduct);

module.exports = router;
