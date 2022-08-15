const { Router } = require('express');

const route = Router();

const productsController = require('../controllers/productsController');

route.get('/', productsController.getProducts);

route.get('/:id', productsController.getProductById);

route.post('/', productsController.create);

module.exports = route;