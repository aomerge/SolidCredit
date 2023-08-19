"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixedPayment = void 0;
const model_1 = require("../../model");
const customRound_utils_1 = require("../../utils/customRound.utils");
class fixedPayment extends model_1.model {
    // Constructor
    constructor(plazo, interes = 18, prestamo = 100000) {
        super(plazo, interes, prestamo);
        this.plazo = plazo;
        this.interes = interes;
        this.prestamo = prestamo;
        this._payments = [];
        // methods protected and private
        this.balancePayment = this.prestamo;
    }
    // methods public
    GetPaymentDetails() {
        return this.calculatePaymentDetails();
    }
    calculatePaymentDetails() {
        const customRounding = new customRound_utils_1.CustomRounding();
        let monthlyInterest = this.calculateMonthlyInterest(this.interes, this.plazo);
        let payment = Number(this.calculatePaymentAmount(this.plazo, monthlyInterest, this.prestamo).toFixed(2));
        for (let i = 1; i <= this.plazo; i++) {
            let interest = this.balancePayment * monthlyInterest;
            let principal = payment - interest;
            let balance = this.balancePayment - principal;
            let paymentDetail = {
                month: i,
                payment: customRounding.GetroundUp(payment),
                interest: customRounding.GetroundUp(Number(interest.toFixed(2))),
                principal: customRounding.GetroundUp(Number(principal.toFixed(2))),
                balance: customRounding.GetroundUp(Number(balance.toFixed(2))),
            };
            this.payments = paymentDetail;
            this._payments.push(this.payments);
            this.balancePayment = balance;
        }
        return this._payments;
    }
}
exports.fixedPayment = fixedPayment;
