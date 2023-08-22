import { fixedPayment } from "../src/global/model/calculateCredit/fixedPayment.model";
import { VariablePayment } from "../src/global/model/calculateCredit/variablePayment.model";
import { gracePeriods } from "../src/global/model/calculateCredit/gracePeriods.model";
import { AmericanPayment } from "../src/global/model/calculateCredit/americanPayment.model";
import { PaymentDetail } from "../src/global/model/type/PaymentDetai.type";

export class Solid {

  static fixedPayment(
    plazo: number,
    interes: number,
    prestamo: number
  ): PaymentDetail[] {
    const NewfixedPayment: fixedPayment = new fixedPayment(plazo, interes, prestamo);
    const data = NewfixedPayment.GetPaymentDetails();
    return data;
  }
  static variablePayment(
    plazo: number,
    interes: number,
    prestamo: number,
    basepayment: number = 1
  ): PaymentDetail[] {
    const NewvariablePayment = new VariablePayment(
      plazo,
      interes,
      prestamo,
      basepayment
    );
    const data = NewvariablePayment.GetPaymentDetails();
    return data;
  }
  static gracePeriod(
    plazo: number,
    interes: number,
    prestamo: number,
    gracePeriod: number
  ): PaymentDetail[] {
    const Newgraceperiod = new gracePeriods(
      plazo,
      interes,
      prestamo,
      gracePeriod
    );
    const data = Newgraceperiod.GetPaymentDetails();
    return data;
  }
  static graceFixedPayment(
    plazo: number,
    interes: number,
    prestamo: number,
    gracePeriod: number
  ):  Promise<PaymentDetail[]> {
    const Newgraceperiod = new gracePeriods(
      plazo,
      interes,
      prestamo,
      gracePeriod
    );
    const data = Newgraceperiod.GetFixedPayment();
    return data;
  }
  static americanMethod(
    plazo: number,
    interes: number,
    prestamo: number
  ): PaymentDetail[] {
    const NewamericanPayment = new AmericanPayment(plazo, interes, prestamo);
    const data = NewamericanPayment.GetPaymentDetails();
    return data;
  }
}
