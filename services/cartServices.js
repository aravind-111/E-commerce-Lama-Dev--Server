const router = require("express").Router();
const Cart = require("../models/Order");

// CREATE ORDER
const createCart = async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(201).send(savedCart);
  } catch (err) {
    res.status(500).send(err);
  }
};

// UPDATE ORDER
const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedCart);
  } catch (err) {
    res.status(500).send(err);
  }
};

// DELETE PRODUCT
const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).send("Cart deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};

// GET ALL USER PRODUCTS
const getAllUserCart = async (req, res) => {
  try {
    const carts = await Cart.findOne({ userId: req.params.userId });
    res.status(200).send(carts);
  } catch (err) {
    res.status(500).send(err);
  }
};

// GET ALL CARTS
const getAllCart = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).send(carts);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createCart,
  updateCart,
  deleteCart,
};
