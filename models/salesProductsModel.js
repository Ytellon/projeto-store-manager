const connection = require('./connection');
const salesModel = require('./salesModel');

const salesProductsModel = {
  createSalesProducts: async (sales) => {
    const id = await salesModel.createSales();
    await sales.forEach(async (product) => {
      await connection.execute(
        `INSERT INTO 
        StoreManager.sales_products (sale_id, product_id, quantity)
        VALUES (?, ?, ?)`,
        [id, product.productId, product.quantity],
      );
    });
    return { id, itemsSold: sales };
  },

};

module.exports = salesProductsModel;
