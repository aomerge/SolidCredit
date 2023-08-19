"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariablePayment = void 0;
const model_1 = require("../../model");
const customRound_utils_1 = require("../../utils/customRound.utils");
const convertToDecimal_utils_1 = require("../../utils/convertToDecimal.utils");
class VariablePayment extends model_1.model {
    constructor(plazo, interes, prestamo, basepayment = 1) {
        super(plazo, interes, prestamo);
        this.plazo = plazo;
        this.interes = interes;
        this.prestamo = prestamo;
        this.basepayment = basepayment;
        this._payments = [];
    }
    // method public
    GetPaymentDetails() {
        return this.calculatePaymentDetails();
    }
    // method protected and private
    calculatePaymentDetails() {
        const customRounding = new customRound_utils_1.CustomRounding();
        const ConvertToDecimal = new convertToDecimal_utils_1.convertToDecimal();
        this._payments = [];
        let monthlyInterest = this.calculateMonthlyInterest(this.interes + ConvertToDecimal.getdecimalize(this.basepayment), this.plazo);
        for (let i = 1; i <= this.plazo; i++) {
            let interest = this.prestamo * monthlyInterest;
            let principal = this.prestamo / (this.plazo - i + 1);
            let payment = principal + interest;
            let balance = this.prestamo - principal;
            let paymentDetail = {
                month: i,
                payment: customRounding.GetroundUp(payment),
                interest: customRounding.GetroundUp(Number(interest.toFixed(2))),
                principal: customRounding.GetroundUp(Number(principal.toFixed(2))),
                balance: customRounding.GetroundUp(Number(balance.toFixed(2))),
            };
            this.payments = paymentDetail;
            this._payments.push(this.payments);
            this.prestamo = balance;
        }
        return this._payments;
    }
}
exports.VariablePayment = VariablePayment;
