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

  getSales: async (req, res) => {
    const resultado = await saleService.getSales();
    if (!resultado) {
      return res.status(404).json({
        message: 'Sale not found',
      });
    }
    return res.status(200).json(resultado);
  },

  getSalesById: async (req, res) => {
    const { id } = req.params;
    const resultado = await saleService.getSalesById(id);
    if (!resultado || resultado.length === 0) {
      return res.status(404).json({
        message: 'Sale not found',
      });
    }
    return res.status(200).json(resultado);
  },
};

module.exports = salesController;