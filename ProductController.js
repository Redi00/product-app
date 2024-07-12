const express = require("express");

exports.GetAllProducts = async (req, res) => {
  const productList = ["Chair", "table"];
  res.send(productList);
};
// exports.AddProduct = async (req, res) => {
//   const data = req.body;
//   const products = data.products;
//   const category = data.Category;
//   console.log(products);
// };
exports.createProduct = (req, res) => {
  const newProduct = req.body;

  res.status(201).send(newProduct);
};

exports.deleteProduct = async(req, res) => {
  const productId = req.params.id;
  console.log("deleted");
  res.send(`Product with id ${productId} deleted.`);
};

