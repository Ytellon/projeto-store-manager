const { expect } = require("chai");
const { describe } = require("mocha");

const productService = require("../../../services/productService");
const productsController = require("../../../controllers/productsController");
const Sinon = require("sinon");

describe('teste para controller products', () => {
  describe('teste para getProducts', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('retorna um array de objetos', async () => {
      const resultExecute = [
        {
          id: 1,
          name: "Martelo de Thor",
        },
        {
          id: 2,
          name: "Traje de encolhimento",
        },
        {
          id: 3,
          name: "Escudo do Capitão América",
        },
      ];
      Sinon.stub(productService, "getProducts").resolves(resultExecute);
      const req = {};
      const res = {};
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns();
      await productsController.getProducts(req, res);
      expect(res.status.calledWith(200)).to.be.true;
      expect(resultExecute).to.be.an("array");
      expect(resultExecute[0]).to.be.an("object");
      it('verifica todos os produtos', async () => {
        const resultExecute = [
          {
            id: 1,
            name: "Martelo de Thor",
          },
          {
            id: 2,
            name: "Traje de encolhimento",
          },
          {
            id: 3,
            name: "Escudo do Capitão América",
          },
        ];
        const req = {};
        const res = {};
        res.status = Sinon.stub().returns(res);
        res.json = Sinon.stub().returns();
        await productsController.getProducts(req, res);
        expect(res.status.calledWith(200)).to.be.true;
        expect(res.json.calledWith(resultExecute)).to.be.true;
      })
    });
    describe('teste para getProductById', () => {
      afterEach(() => {
        Sinon.restore();
      });
      it('retorna um objeto', async () => {
        const resultExecute =
          {
            id: 1,
            name: "Martelo de Thor",
          };
        Sinon.stub(productService, "getProductById").resolves(resultExecute);
        const req = {};
        const res = {};
        req.params = 1;
        res.status = Sinon.stub().returns(res);
        res.json = Sinon.stub().returns();
        await productsController.getProductById(req, res);
        expect(res.status.calledWith(200)).to.be.true;
        expect(resultExecute).to.be.an("object");
        expect(resultExecute).to.be.not.empty;
        expect(res.json.calledWith(resultExecute)).to.be.true;
      });
      it('retorna um objeto vazio', async () => {
        Sinon.stub(productService, "getProductById").resolves(null);
        const req = {};
        const res = {};
        req.params = 55;
        res.status = Sinon.stub().returns(res);
        res.json = Sinon.stub().returns();
        await productsController.getProductById(req, res);
        expect(res.status.calledWith(404)).to.be.true;
        expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
      });
    });
  })
  describe('teste para createProduct', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('verifica sucesso da func', async () => {
      const resultExecute = {
        id: 4,
        name: "laço da verdade",
      }
      Sinon.stub(productService, "create").resolves(resultExecute);
      const req = {};
      const res = {};
      req.body = { name: "laço da verdade" };
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns();
      await productsController.create(req, res);
      expect(res.status.calledWith(201)).to.be.true;
      expect(resultExecute).to.be.an("object");
      expect(resultExecute).to.be.not.empty;
      expect(res.json.calledWith(resultExecute)).to.be.true;
    });
    it('verifica erro ao criar', async () => {
      Sinon.stub(productService, "create").resolves(null);
      const req = {};
      const res = {};
      req.body = { name: "laço da verdade" };
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns();
      await productsController.create(req, res);
      expect(res.status.calledWith(400)).to.be.true;
      expect(res.json.calledWith({ message: 'Product not created' })).to.be.true;
    });
  });
})