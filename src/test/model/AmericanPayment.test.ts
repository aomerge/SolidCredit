import { expect } from "chai";
import { AmericanPayment } from "../../global/model/calculateCredit/americanPayment.model";

describe("AmericanPayment", () => {
    it("should return an array", () => {
        const FixedPayment = new AmericanPayment(5, 20, 100);
        const result = FixedPayment.GetPaymentDetails();
        expect(result).to.be.an("array");
    });
    it("should have a long of 5 ", () => {
        const plazo = 5;
        const FixedPayment = new AmericanPayment(plazo, 20, 100);
        const result = FixedPayment.GetPaymentDetails();
        expect(result).to.have.lengthOf(plazo);
    });
    it("should calculate payment details correctly", () => {
        const americanPayment = new AmericanPayment(5, 18, 10000);
        const expectedPayments = [
        {
            month: 1,
            payment: 340,
            interest: 340,
            principal: 0,
            balance: 10000,
        },
        {
            month: 2,
            payment: 340 ,
            interest: 340,
            principal: 0,
            balance: 10000,
        },
        {
            month: 3,
            payment: 340 ,
            interest: 340,
            principal: 0,
            balance: 10000,
        },
        {
            month: 4,
            payment: 340 ,
            interest: 340,
            principal: 0,
            balance: 10000,
        },
        {
            month: 5,
            payment: 10340 ,
            interest: 340,
            principal: 10000,
            balance: 0,
        }
        ];

        const actualPayments = americanPayment.GetPaymentDetails();
        expect(actualPayments).to.deep.equal(expectedPayments);
  });
});
