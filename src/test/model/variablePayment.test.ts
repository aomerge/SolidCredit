import { expect } from "chai";
import { VariablePayment } from "../../global/model/calculateCredit/variablePayment.model";

describe("AmericanPayment", () => {
    let variablePayment: VariablePayment;
    let plazo: number;
    let interest: number;
    let monto: number;
    let basepayment: number;

    beforeEach(() => {
      variablePayment = new VariablePayment(
        (plazo = 12),
        (interest = 5),
        (monto = 10000),
        basepayment = 358
      );
    });
    describe("TEST: GetPaymentDetails", () => {
        it("should return an array", () => {
            const result = variablePayment.GetPaymentDetails();
            expect(result).to.be.an("array");
        });

        it("should have a long of plazo ", () => {
            const result = variablePayment.GetPaymentDetails();
            expect(result).to.have.lengthOf(plazo);
        });

        it("the object should have the propietaries ('month', 'payment', 'interest', 'principal', 'balance'  )", () => {
            const result = variablePayment.GetPaymentDetails();
            result.forEach((item) => {
            expect(item).to.have.property("month");
            expect(item).to.have.property("payment");
            expect(item).to.have.property("interest");
            expect(item).to.have.property("principal");
            expect(item).to.have.property("balance");
            });
        });

        it("the object should in propietari balance in the end month should be 0", async () => {
            const result = await variablePayment.GetPaymentDetails();
            expect(result[result.length - 1].balance).to.be.equal(0);
        });
        it("the object should in propietari paytment between the seventh and end month should be 833.5", async () => {
          const result = await variablePayment.GetPaymentDetails();
          for (let i = 6; i < result.length; i++) {
            expect(result[i].principal).to.be.equal(833.5);
          }
        });
  
    });
});