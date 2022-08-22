const connection = require('./connection');

const salesModels = {
  createSales: async () => {
    const [result] = await connection
      .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
    return result.insertId;
  },
  getSales: async () => {
    const query = `
      SELECT id AS saleId, 'date', product_id AS productId, quantity
      FROM StoreManager.sales AS sa
      JOIN StoreManager.sales_products AS sp ON sa.id = sp.sale_id
      ORDER BY sa.id, sp.product_id
      `;
    const [result] = await connection
      .execute(query);
    return result;
  },
  getSalesById: async (id) => {
    const query = `
      SELECT 'date', product_id AS productId, quantity
      FROM StoreManager.sales AS sa
      JOIN StoreManager.sales_products AS sp ON sa.id = sp.sale_id
      WHERE sa.id = ?
      ORDER BY sa.id, sp.product_id
      `;
    const [result] = await connection
      .execute(query, [id]);
    return result;
  },
};

module.exports = salesModels;