const { expect } = require("chai");

const salesProductsModels = require("../../../models/salesProductsModel");
const salesModel = require("../../../models/salesModel");
const connection = require("../../../models/connection");
const Sinon = require("sinon");

describe("teste Para Model SalesModel", () => {
  describe("teste para createSales func", () => {

    afterEach(() => {
      Sinon.restore();
    });
    it("retorna numero do Id de vendas", async () => {
      const resultExecute = {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 4,
        info: "",
        serverStatus: 2,
        warningStatus: 0,
      };
      Sinon.stub(connection, "execute").resolves([resultExecute]);
      const resultado = await salesModel.createSales();
      expect(resultado).to.be.a('number');
      expect(resultado).to.be.equal(4);
    });
  });
  describe("teste para createSalesProducts func", () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('verifica se retorna o Id de vendas', async () => {
      Sinon.stub(salesModel, "createSales").resolves(5);
      Sinon.stub(connection, "execute").resolves();
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
      const resultado = await salesProductsModels.createSalesProducts(sales);
      expect(resultado).to.be.a('object');
      expect(resultado).to.all.keys('id', 'itemsSold');
      expect(resultado.id).to.be.equal(5);
      expect(resultado.itemsSold).to.be.equal(sales);
    });
  });
});