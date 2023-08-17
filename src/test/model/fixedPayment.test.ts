import { expect } from "chai";
import { fixedPayment } from "../../global/model/calculateCredit/fixedPayment.model";

describe("Fixed Payment", () => {
    it("should return an array", () => {
      const FixedPayment = new fixedPayment(5, 20, 100);
      const result = FixedPayment.GetPaymentDetails();
      expect(result).to.be.an("array");
    });
    it("should have a long of 5 ", () => {
      const plazo = 5;
      const FixedPayment = new fixedPayment(plazo, 20, 100);
      const result = FixedPayment.GetPaymentDetails();
      expect(result).to.have.lengthOf(plazo);
    });

    it("the object should have the propietaries ('pago', 'cuota', 'interes', 'abono', 'saldo'  )", () => {
      const FixedPayment = new fixedPayment(12, 20, 100);
      const result = FixedPayment.GetPaymentDetails();
      result.forEach((item) => {
        expect(item).to.have.property("month");
        expect(item).to.have.property("payment");
        expect(item).to.have.property("interest");
        expect(item).to.have.property("principal");
        expect(item).to.have.property("balance");
      });
    });
  });

  describe("TEST: Interest rate of credit", () => {
    it("should return 0.008 when unput is 12, 10", () => {
      const FixedPayment = new fixedPayment(12, 10, 1000);
      const result = FixedPayment.GetMonthlyInterest();
      expect(result).to.equal(0.008);
    });
  });

  describe("TEST: calculate fixed Payment  ", async () => {
    it("should return 22.5 when input is 5, 20, 100", async () => {
      const FixedPayment = new fixedPayment(5, 20, 100);
      let result = Number(FixedPayment.GetPayment().toFixed(1));
      expect(result).to.equal(22.3);
    });
});


