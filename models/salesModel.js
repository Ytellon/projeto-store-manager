const connection = require('./connection');

const salesModels = {
  createSales: async () => {
    const [result] = await connection
      .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
    return result.insertId;
  },
};

module.exports = salesModels;