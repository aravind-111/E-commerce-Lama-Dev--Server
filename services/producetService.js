const router = require("express").Router();
const Product = require("../models/Product");

// CREATE PRODUCT
const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(201).send(savedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("PRODUCT deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};

// GET ALL USER PRODUCTS
const getAllUserProducts = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
};

// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
};
