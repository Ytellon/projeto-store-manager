const saleService = require('../services/saleService');

const salesController = {
  createSalesProducts: async (req, res) => {
    const sales = req.body.map((product) => product);
    const resultado = await saleService.createSalesProducts(sales);
    if (!resultado) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }
    return res.status(201).json(resultado);
  },
};

module.exports = salesController;