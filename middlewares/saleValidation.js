const saleValidation = {
  productIdValidation: (req, res, next) => {
    if (req.body.find((sale) => sale.productId === undefined)) {
      return res.status(400).json({
        message: '"productId" is required',
      });
    }
    return next();
  },

  productQuantityValidation: (req, res, next) => {
    if (req.body.find((sale) => sale.quantity === undefined)) {
      return res.status(400).json({
        message: '"quantity" is required',
      });
    }
    return next();
  },

  productQuantityLength: (req, res, next) => {
    if (req.body.find((sale) => sale.quantity < 1)) {
      return res.status(422).json({
        message: '"quantity" must be greater than or equal to 1',
      });
    }
    return next();
  },

};

module.exports = saleValidation;
