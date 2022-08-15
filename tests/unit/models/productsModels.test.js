const { expect } = require("chai");

const productsModels = require("../../../models/productsModels");
const connection = require("../../../models/connection");
const Sinon = require("sinon");

describe("teste Para Model Products", () => {
  describe("teste para getProducts", () => {
    afterEach(() => {
      Sinon.restore();
    });
    it("retorna array", async () => {
      const resultExecute = [];
      Sinon.stub(connection, "execute").resolves([resultExecute]);

      const resultado = await productsModels.getProducts();

      expect(resultado).to.be.an("array");
    });
    it("retorna um array vazio", async () => {
      const resultExecute = [];
      Sinon.stub(connection, "execute").resolves([resultExecute]);

      const resultado = await productsModels.getProducts();

      expect(resultado).to.be.empty;
    });
    it("retorn um array cheio", async () => {
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
      Sinon.stub(connection, "execute").resolves([resultExecute]);

      const resultado = await productsModels.getProducts();

      expect(resultado).to.be.not.empty;
    });
    it('retorna array contenha objetos', async () => {
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
      Sinon.stub(connection, "execute").resolves([resultExecute]);

      const resultado = await productsModels.getProducts();

      expect(resultado[0]).to.be.an("object");
      expect(resultado[0]).to.all.keys("id", "name");
    });
  });
  describe("teste para getProductById", () => {
    afterEach(() => {
      Sinon.restore();
    });
    it("retorna um objeto", async () => {
      const resultExecute = [
        {
          id: 1,
          name: "Martelo de Thor",
        },
      ];
      Sinon.stub(connection, "execute").resolves([resultExecute]);

      const resultado = await productsModels.getProductById(1);

      expect(resultado).to.be.an("object");
      expect(resultado).to.be.not.empty;
      expect(resultado).to.all.keys("id", "name");
      expect(resultado.id).to.equal(1);
    });
  });
  describe("teste para create", () => {
    afterEach(() => {
      Sinon.restore();
    });
    it("retorna um objeto", async () => {
      const resultExecute = [{}];
      Sinon.stub(connection, "execute").resolves([resultExecute]);

      const resultado = await productsModels.create("laço da verdade");

      expect(resultado).to.be.an("object");
    });
    it('verificando se foi criado o produto', async () => {
      const resultExecute = [{}];
      Sinon.stub(connection, "execute").resolves([resultExecute]);

      const resultado = await productsModels.create("laço da verdade");

      expect(resultado).to.all.keys("id", "name");
      expect(resultado.name).to.equal("laço da verdade");
    });
  });
});
