const productsModels = require('../models/productsModels');

const productService = {

getProducts: async () => productsModels.getProducts(),

getProductById: async (id) => productsModels.getProductById(id),

create: async (name) => productsModels.create(name),

};

module.exports = productService;