const salesProductsModel = require('../models/salesProductsModel');
const productsModel = require('../models/productsModels');

const saleService = {
  createSalesProducts: async (sales) => {
    const validation = await Promise.all(
      sales.map(async (product) => productsModel.getProductById(product.productId)),
    );
    if (validation.includes(undefined)) {
      return null;
    }
    const result = await salesProductsModel.createSalesProducts(sales);
    return result;
  },
};

module.exports = saleService;
