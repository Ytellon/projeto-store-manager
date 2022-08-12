const productsModels = require('../models/productsModels');

const getProducts = async () => productsModels.getProducts();
const getProductById = async (id) => productsModels.getProductById(id);

module.exports = { getProducts, getProductById };