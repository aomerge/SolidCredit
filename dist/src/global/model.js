"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = void 0;
class model {
    // Constructor
    constructor(plazo, interes, prestamo) {
        this.plazo = plazo;
        this.interes = interes;
        this.prestamo = prestamo;
    }
    // Métodos públicos que invocan a los métodos protegidos.
    GetMonthlyInterest() {
        return this.calculateMonthlyInterest(this.interes, this.plazo);
    }
    GetPayment() {
        const intereses = this.GetMonthlyInterest();
        return this.calculatePaymentAmount(this.plazo, intereses, this.prestamo);
    }
    // method protected
    calculateMonthlyInterest(interes, plazo) {
        const INTERESANUAL = interes / 100;
        return Number((Math.pow(INTERESANUAL + 1, 1 / plazo) - 1).toFixed(3));
    }
    calculatePaymentAmount(plazo, interes, prestamo) {
        const interestAmount = interes * prestamo;
        const denominator = 1 - Math.pow(1 + interes, -plazo);
        const paymentAmount = interestAmount / denominator;
        return paymentAmount;
    }
}
exports.model = model;
