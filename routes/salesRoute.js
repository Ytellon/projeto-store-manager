const { Router } = require('express');
const salesController = require('../controllers/salesController');
const saleValidation = require('../middlewares/saleValidation');

const route = Router();

route.post(
  '/',
  saleValidation.productIdValidation,
  saleValidation.productQuantityValidation,
  saleValidation.productQuantityLength,
  salesController.createSalesProducts,
);

route.get('/', salesController.getSales);
route.get('/:id', salesController.getSalesById);

module.exports = route;
