const { expect } = require("chai");

const Sinon = require("sinon");
const saleService = require("../../../services/saleService");
const salesController = require("../../../controllers/salesController");

describe('teste para controller Sales', () => {
  describe('teste para createsalesProducts', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('verifica o resultado sucesso do createSale', async () => {
      const sales = [
        {
          productId: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 1,
        },
      ];
      const req = {};
      const res = {};
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns();
      req.body = sales;
      Sinon.stub(saleService, "createSalesProducts").resolves({
        id: 9,
        itemsSold: sales,
      });
      await salesController.createSalesProducts(req, res);
      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith({ id: 9, itemsSold: sales })).to.be.true;
    });
    it("verifica o resultado falha do createSale", async () => {
      const sales = [
        {
          productId: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 1,
        },
      ];
      const req = {};
      const res = {};
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns();
      req.body = sales;
      Sinon.stub(saleService, "createSalesProducts").resolves(null);
      await salesController.createSalesProducts(req, res);
      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
    });
  });
});