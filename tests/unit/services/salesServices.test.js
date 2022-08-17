const { expect } = require("chai");

const Sinon = require("sinon");
const saleService = require("../../../services/saleService");
const salesProductsModel = require("../../../models/salesProductsModel");
const productsModel = require("../../../models/productsModels");


describe("teste Para Service Sales", () => {
  describe('teste para createSalesProducts', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('verifica se retorna as chaves', async () => {
      Sinon.stub(productsModel, "getProductById").resolves({
        id: 1,
        name: "Martelo de Thor",
      });
      Sinon.stub(salesProductsModel, "createSalesProducts").resolves({
        id: 8,
        itemsSold: [
          {
            productId: 1,
            quantity: 1,
          }
        ]
      });

      const sales = [
        {
          productId: 1,
          quantity: 1,
        }
      ];
      const resultado = await saleService.createSalesProducts(sales);
      expect(resultado).to.be.a("object");
      expect(resultado).to.all.keys("id", "itemsSold");
      expect(resultado.id).to.be.equal(8);
    });
    it('verifica se retorna null se o produto não existir', async () => {
      Sinon.stub(productsModel, "getProductById").resolves(undefined);
      Sinon.stub(salesProductsModel, "createSalesProducts").resolves();

      const sales = [
        {
          productId: 1,
          quantity: 1,
        }
      ];
      const resultado = await saleService.createSalesProducts(sales);
      expect(resultado).to.be.equal(null);
    });
  });
});