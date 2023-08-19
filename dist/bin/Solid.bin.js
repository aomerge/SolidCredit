"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solid = void 0;
const fixedPayment_model_1 = require("../src/global/model/calculateCredit/fixedPayment.model");
const variablePayment_model_1 = require("../src/global/model/calculateCredit/variablePayment.model");
const gracePeriods_model_1 = require("../src/global/model/calculateCredit/gracePeriods.model");
const americanPayment_model_1 = require("../src/global/model/calculateCredit/americanPayment.model");
class Solid {
    static fixedPayment(plazo, interes, prestamo) {
        this.NewfixedPayment = new fixedPayment_model_1.fixedPayment(plazo, interes, prestamo);
        const data = this.NewfixedPayment.GetPaymentDetails();
        return data;
    }
    static variablePayment(plazo, interes, prestamo, basepayment = 1) {
        this.NewvariablePayment = new variablePayment_model_1.VariablePayment(plazo, interes, prestamo, basepayment);
        const data = this.NewvariablePayment.GetPaymentDetails();
        return data;
    }
    static gracePeriod(plazo, interes, prestamo, gracePeriod) {
        this.Newgraceperiod = new gracePeriods_model_1.gracePeriods(plazo, interes, prestamo, gracePeriod);
        const data = this.Newgraceperiod.GetPaymentDetails();
        return data;
    }
    static graceFixedPayment(plazo, interes, prestamo, gracePeriod) {
        this.Newgraceperiod = new gracePeriods_model_1.gracePeriods(plazo, interes, prestamo, gracePeriod);
        const data = this.Newgraceperiod.GetFixedPayment();
        return data;
    }
    static americanMethod(plazo, interes, prestamo) {
        this.NewamericanPayment = new americanPayment_model_1.AmericanPayment(plazo, interes, prestamo);
        const data = this.NewamericanPayment.GetPaymentDetails();
        return data;
    }
}
exports.Solid = Solid;
