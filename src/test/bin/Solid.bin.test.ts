import { expect } from "chai";
import { Solid } from "../../../bin/Solid.bin";
import { PaymentDetail } from "../../global/model/type/PaymentDetai.type";

describe("Solid", () => {
  describe("fixedPayment", () => {
      let result: any;
      let plazo: number;
      beforeEach(() => {
        result = Solid.fixedPayment(plazo = 12, 15, 1000);
      });
    it("should return an array of PaymentDetail objects", () => {
      expect(result).to.be.an("array");
      expect(result[0]).to.have.all.keys(
        "month",
        "payment",
        "interest",
        "principal",
        "balance"
      );
    });
    it("the object should in propietari balance in the end month should be 0", async () => {
      expect(result[result.length - 1].balance).to.be.equal(0);
    });
    it("the object should in propietari paytment is of 90", async () => {      
      for (let i = 0; i < result.length; i++) {
        expect(result[i].payment).to.be.equal(90);
      }
    });
    it("should have a long of plazo ", async () => {      
      expect(result[plazo - 1].month).to.be.equal(plazo);
    });
  });

  describe("variablePayment", () => {
    let result: any;
    let plazo: number;
    beforeEach(() => {
      result = Solid.variablePayment((plazo = 12), 15, 1000);
    });
    it("should return an array of PaymentDetail objects", () => {      
      expect(Array.isArray(result)).to.be.true;
      expect(result[0]).to.haveOwnProperty("month");
      expect(result[0]).to.haveOwnProperty("payment");
      expect(result[0]).to.haveOwnProperty("interest");
      expect(result[0]).to.haveOwnProperty("principal");
      expect(result[0]).to.haveOwnProperty("balance");
    });
    it("the object should in propietari balance in the end month should be 0", async () => {
      expect(result[result.length - 1].balance).to.be.equal(0);
    });
    it("should have a long of plazo ", async () => {
      
      expect(result[plazo - 1].month).to.be.equal(plazo);
    });
    it("the object should in propietari principal should be 83.5", async () => {
      for (let i = 0; i < result.length; i++) {
        expect(result[i].principal).to.be.equal(83.5);
      }
    });
  });

  describe("gracePeriod", () => {
    let result: any;
    let plazo: number;
    beforeEach(() => {
      result = Solid.gracePeriod((plazo = 12), 15, 1000,6);
    });
    it("should return an array of PaymentDetail objects", () => {
      expect(Array.isArray(result)).to.be.true;
      expect(result[0]).to.haveOwnProperty("month");
      expect(result[0]).to.haveOwnProperty("payment");
      expect(result[0]).to.haveOwnProperty("interest");
      expect(result[0]).to.haveOwnProperty("principal");
      expect(result[0]).to.haveOwnProperty("balance");
    });
    it("the object should in propietari balance in the end month should be 0", async () => {
      expect(result[result.length - 1].balance).to.be.equal(0);
    });
    it("the object should in propietari payment in the sixth month should be 12", async () => {
      expect(result[5].payment).to.be.equal(12);
    });
    it("the object should in propietari principal between the sevent and end month should be 1666.5", async () => {
      for (let i = 6; i < result.length; i++) {
        expect(result[i].principal).to.be.equal(166.5);
      }
    });
  });

  describe("graceFixedPayment", () => {
    let result: PaymentDetail[];
    let plazo: number;    
    beforeEach(async () => {
      result = await Solid.graceFixedPayment((plazo = 12), 15, 1000, 6);
    });
    it("should return a Promise that resolves to an array of graceFixedPayment objects", async () => {
      expect(Array.isArray(result)).to.be.true;      
    });
    it("the object should in propietari balance between the first and sixth month exist a increment of 12", async () => {      
      const balancExpect = [1012, 1024, 1036.5, 1049, 1061.5, 1074];      
      for (let i = 0; i <= 5; i++) {
        await expect(await result[i].balance).to.be.equal(balancExpect[i]);
      }
    });
    it("the object should in propietari paytment between the seventh and end month should be 173.5", async () => {      
      for (let i = 6; i < result.length; i++) {
        await expect(result[i].payment).to.be.equal(186.5);
      }
    });
    it("should have a long of plazo ", async () => {
      
      // Verificar si la promesa resuelve a un array con 3 elementos
      await expect(result.length).to.be.equal(plazo);
    });

    it("the object should have the propietaries ('month', 'payment', 'interest', 'principal', 'balance'  )", async () => {
      
      (await result).forEach((item: any) => {
        expect(item).to.have.property("month");
        expect(item).to.have.property("payment");
        expect(item).to.have.property("interest");
        expect(item).to.have.property("principal");
        expect(item).to.have.property("balance");
      });
    });
    it("the object should in propietari balance in the end month should be 0", async () => {      
      expect(await result[result.length - 1]?.balance).to.be.equal(0);      
    });
  });

  describe("americanMethod", async () => {
    let result: any;
    let plazo: number;
    beforeEach( async () => {
      result = await Solid.americanMethod((plazo = 12), 15, 1000);
    });
    it("should return an array of PaymentDetail objects", () => {      
      expect(Array.isArray(result)).to.be.true;
      expect(result[0]).to.haveOwnProperty("month");
      expect(result[0]).to.haveOwnProperty("payment");
      expect(result[0]).to.haveOwnProperty("interest");
      expect(result[0]).to.haveOwnProperty("principal");
      expect(result[0]).to.haveOwnProperty("balance");
    });
    it("the object should in propietari balance in the end month should be 0", async () => {
      expect(result[result.length - 1].balance).to.be.equal(0);
    });
    it("should have a long of plazo ", async () => {      
      expect(result.length).to.be.equal(12);
    });
  });
});
