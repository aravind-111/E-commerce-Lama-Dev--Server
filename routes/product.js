const { createProduct } = require("../services/producetService");
const { updateProduct } = require("../services/producetService");
const { deleteProduct } = require("../services/producetService");
const { getAllProducts } = require("../services/producetService");

const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

router.post("/post", verifyTokenAndAdmin, createProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.get("/", verifyTokenAndAdmin, getAllProducts);

module.exports = router;
