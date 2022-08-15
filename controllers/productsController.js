const productService = require('../services/productService');

const getProducts = async (req, res) => {
  const resultado = await productService.getProducts();
  return res.status(200).json(resultado);
};

const getProductById = async (req, res) => {
  const resultado = await productService.getProductById(req.params.id);

  if (!resultado) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }
  return res.status(200).json(resultado);
};

const create = async (req, res) => {
  const { name } = req.body;
  const resultado = await productService.create(name);
  if (!resultado) {
    return res.status(400).json({
      message: 'Product not created',
    });
  }
  return res.status(201).json(resultado);
};

module.exports = { getProducts, getProductById, create };