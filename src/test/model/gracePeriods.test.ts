import { expect } from "chai";
import { gracePeriods } from "../../global/model/calculateCredit/gracePeriods.model";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

describe("grace Periods", () => {
  let graceperiods: gracePeriods;
  let plazo: number;
  let interest: number;
  let monto: number;

  beforeEach(() => {
    graceperiods = new gracePeriods((plazo = 12), (interest=5), (monto= 10000), 6);
  });
  describe("TEST: GetPaymentDetails", () => {
    it("should return an array", () => {
      const result = graceperiods.GetPaymentDetails();
      expect(result).to.be.an("array");
    });

    it("should have a long of plazo ", () => {      
      const result = graceperiods.GetPaymentDetails();
      expect(result).to.have.lengthOf(plazo);
    });

    it("the object should have the propietaries ('month', 'payment', 'interest', 'principal', 'balance'  )", () => {
      const result = graceperiods.GetPaymentDetails();
      result.forEach((item) => {
        expect(item).to.have.property("month");
        expect(item).to.have.property("payment");
        expect(item).to.have.property("interest");
        expect(item).to.have.property("principal");
        expect(item).to.have.property("balance");
      });
    });

    it("the object should in propietari balance in the end month should be 0", async () => {
      const result = await graceperiods.GetPaymentDetails();
      expect(result[result.length - 1].balance).to.be.equal(0);
    });
    it("the object should in propietari payment in the sixth month should be 40", async () => {
      const result = await graceperiods.GetPaymentDetails();
      expect(result[5].payment).to.be.equal(40);
    });
    it("the object should in propietari principal between the sevent and end month should be 1666.5", async () => {
      const result = await graceperiods.GetPaymentDetails();
      for (let i = 6; i < result.length; i++) {
        expect(result[i].principal).to.be.equal(1666.5);
      }
    });
  });

  describe("TEST: GetFixedPayment", () => {
    it("should return an Promices<array>", async () => {
      const result = graceperiods.GetFixedPayment();
      expect(result).to.be.an.instanceof(Promise);
      await expect(result).to.eventually.be.an("array");
    });

    it("should have a long of 5 ", async () => {
      const plazo = 5;
      const graceperiods2 = new gracePeriods(plazo, 20, 100, 2);
      const result = graceperiods2.GetFixedPayment();
      // Verificar si la promesa resuelve a un array con 3 elementos
      await expect(result).to.eventually.have.lengthOf(plazo);
    });

    it("the object should have the propietaries ('month', 'payment', 'interest', 'principal', 'balance'  )", async () => {
      const result = graceperiods.GetFixedPayment();
      (await result).forEach((item) => {
        expect(item).to.have.property("month");
        expect(item).to.have.property("payment");
        expect(item).to.have.property("interest");
        expect(item).to.have.property("principal");
        expect(item).to.have.property("balance");
      });
    });
    it("the object should in propietari balance in the end month should be 0", async () => {
      const result = await graceperiods.GetFixedPayment();
      expect(result[result.length - 1].balance).to.be.equal(0);
    });
    it("the object should in propietari balance between the first and sixth month exist a increment of 40", async () => {
      const result = await graceperiods.GetFixedPayment();
      const balancExpect = [10040, 10080, 10120.5, 10161, 10201.5, 10242.5];
      for (let i = 0; i < 6; i++) {
        expect(result[i].balance).to.be.equal(balancExpect[i]);
      }
    });
    it("the object should in propietari paytment between the seventh and end month should be 1731",async () => {
      const result = await graceperiods.GetFixedPayment();
      for (let i = 6; i < result.length; i++) {
        expect(result[i].payment).to.be.equal(1731);
      }
    });
  });
});
