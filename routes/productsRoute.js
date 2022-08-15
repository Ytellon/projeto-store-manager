const { Router } = require('express');
const productValidation = require('../middlewares/productValidation');

const route = Router();

const productsController = require('../controllers/productsController');

route.get('/', productsController.getProducts);

route.get('/:id', productsController.getProductById);

route.post('/', productValidation, productsController.create);

module.exports = route;