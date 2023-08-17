import { fixedPayment } from "../src/global/model/calculateCredit/fixedPayment.model";
import { VariablePayment } from "../src/global/model/calculateCredit/variablePayment.model";
import { gracePeriods } from "../src/global/model/calculateCredit/gracePeriods.model";
import { AmericanPayment } from "../src/global/model/calculateCredit/americanPayment.model";
import { PaymentDetail } from "../src/global/model/type/PaymentDetai.type";

export class Solid {
  private static NewamericanPayment: AmericanPayment;
  private static Newgraceperiod: gracePeriods;
  private static NewvariablePayment: VariablePayment;
  private static NewfixedPayment: fixedPayment;

  static fixedPayment(
    plazo: number,
    interes: number,
    prestamo: number
  ): PaymentDetail[] {
    this.NewfixedPayment = new fixedPayment(plazo, interes, prestamo);
    const data = this.NewfixedPayment.GetPaymentDetails();
    return data;
  }
  static variablePayment(
    plazo: number,
    interes: number,
    prestamo: number,
    basepayment: number = 1
  ): PaymentDetail[] {
    this.NewvariablePayment = new VariablePayment(
      plazo,
      interes,
      prestamo,
      basepayment
    );
    const data = this.NewvariablePayment.GetPaymentDetails();
    return data;
  }
  static gracePeriod(
    plazo: number,
    interes: number,
    prestamo: number,
    gracePeriod: number
  ): PaymentDetail[] {
    this.Newgraceperiod = new gracePeriods(
      plazo,
      interes,
      prestamo,
      gracePeriod
    );
    const data = this.Newgraceperiod.GetPaymentDetails();
    return data;
  }
  static graceFixedPayment(
    plazo: number,
    interes: number,
    prestamo: number,
    gracePeriod: number
  ):  Promise<PaymentDetail[]> {
    this.Newgraceperiod = new gracePeriods(
      plazo,
      interes,
      prestamo,
      gracePeriod
    );
    const data = this.Newgraceperiod.GetFixedPayment();
    return data;
  }
  static americanMethod(
    plazo: number,
    interes: number,
    prestamo: number
  ): PaymentDetail[] {
    this.NewamericanPayment = new AmericanPayment(plazo, interes, prestamo);
    const data = this.NewamericanPayment.GetPaymentDetails();
    return data;
  }
}
