"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solid = void 0;
const fixedPayment_model_1 = require("../src/global/model/calculateCredit/fixedPayment.model");
const variablePayment_model_1 = require("../src/global/model/calculateCredit/variablePayment.model");
const gracePeriods_model_1 = require("../src/global/model/calculateCredit/gracePeriods.model");
const americanPayment_model_1 = require("../src/global/model/calculateCredit/americanPayment.model");
class Solid {
    static fixedPayment(plazo, interes, prestamo) {
        const NewfixedPayment = new fixedPayment_model_1.fixedPayment(plazo, interes, prestamo);
        const data = NewfixedPayment.GetPaymentDetails();
        return data;
    }
    static variablePayment(plazo, interes, prestamo, basepayment = 1) {
        const NewvariablePayment = new variablePayment_model_1.VariablePayment(plazo, interes, prestamo, basepayment);
        const data = NewvariablePayment.GetPaymentDetails();
        return data;
    }
    static gracePeriod(plazo, interes, prestamo, gracePeriod) {
        const Newgraceperiod = new gracePeriods_model_1.gracePeriods(plazo, interes, prestamo, gracePeriod);
        const data = Newgraceperiod.GetPaymentDetails();
        return data;
    }
    static graceFixedPayment(plazo, interes, prestamo, gracePeriod) {
        const Newgraceperiod = new gracePeriods_model_1.gracePeriods(plazo, interes, prestamo, gracePeriod);
        const data = Newgraceperiod.GetFixedPayment();
        return data;
    }
    static americanMethod(plazo, interes, prestamo) {
        const NewamericanPayment = new americanPayment_model_1.AmericanPayment(plazo, interes, prestamo);
        const data = NewamericanPayment.GetPaymentDetails();
        return data;
    }
}
exports.Solid = Solid;
