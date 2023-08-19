"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gracePeriods = void 0;
const model_1 = require("../../model");
const customRound_utils_1 = require("../../utils/customRound.utils");
class gracePeriods extends model_1.model {
    constructor(plazo, interes, prestamo, gracePeriod) {
        super(plazo, interes, prestamo);
        this.plazo = plazo;
        this.interes = interes;
        this.prestamo = prestamo;
        this.gracePeriod = gracePeriod;
        this._payments = [];
    }
    // methods public
    GetPaymentDetails() {
        return this.calculatePaymentDetails();
    }
    GetFixedPayment() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.calculateFixedPaymentDetails().then((res) => {
                return res;
            });
        });
    }
    // methods protected
    calculatePaymentDetails() {
        let monthlyInterest = this.calculateMonthlyInterest(this.interes, this.plazo);
        for (let i = 1; i <= this.plazo; i++) {
            const customRounding = new customRound_utils_1.CustomRounding();
            let interest = this.prestamo * monthlyInterest;
            let payment;
            let principal;
            let balance;
            if (i <= this.gracePeriod) {
                payment = interest;
                principal = 0;
                balance = this.prestamo;
            }
            else {
                principal = this.prestamo / (this.plazo - i + 1);
                payment = principal + interest;
                balance = this.prestamo - principal;
            }
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
    calculateFixedPaymentDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let monthlyInterest = yield this.calculateMonthlyInterest(this.interes, this.plazo);
                const customRounding = yield new customRound_utils_1.CustomRounding();
                for (let i = 1; i <= this.plazo; i++) {
                    let interest = this.prestamo * monthlyInterest;
                    let payment;
                    let principal;
                    let balance;
                    if (i <= this.gracePeriod) {
                        payment = yield interest;
                        principal = 0;
                        balance = (yield this.prestamo) + payment;
                    }
                    else {
                        let Principal = payment ? payment - interest : 0;
                        payment = Number(this.calculatePaymentAmount(this.plazo - i + 1, monthlyInterest, this.prestamo - Principal).toFixed(1));
                        principal = payment - interest;
                        balance = this.prestamo - principal;
                    }
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
                resolve(this._payments);
            }));
        });
    }
}
exports.gracePeriods = gracePeriods;
