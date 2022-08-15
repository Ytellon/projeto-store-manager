const productsModels = require('../models/productsModels');

const getProducts = async () => productsModels.getProducts();
const getProductById = async (id) => productsModels.getProductById(id);

const create = async (name) => productsModels.create(name);

module.exports = { getProducts, getProductById, create };