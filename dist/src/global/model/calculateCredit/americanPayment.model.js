"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmericanPayment = void 0;
const model_1 = require("../../model");
const customRound_utils_1 = require("../../utils/customRound.utils");
class AmericanPayment extends model_1.model {
    constructor(plazo, interes, prestamo) {
        super(plazo, interes, prestamo);
        this.plazo = plazo;
        this.interes = interes;
        this.prestamo = prestamo;
        this._payments = [];
    }
    // method public
    GetPaymentDetails() {
        return this.calculatePaymentDetails();
    }
    // method private or protected
    calculatePaymentDetails() {
        const customRounding = new customRound_utils_1.CustomRounding();
        this._payments = [];
        let monthlyInterest = this.calculateMonthlyInterest(this.interes, this.plazo);
        for (let i = 1; i <= this.plazo; i++) {
            let interest = this.prestamo * monthlyInterest;
            let payment = i === this.plazo ? this.prestamo + interest : interest; // In the last year, the capital is paid along with the interest
            let principal = i === this.plazo ? this.prestamo : 0;
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
exports.AmericanPayment = AmericanPayment;
