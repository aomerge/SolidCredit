import { model } from "../../model";
import { CustomRounding } from "../../utils/customRound.utils";
import { convertToDecimal } from "../../utils/convertToDecimal.utils";
import { IModel } from "../interface/Imodel.interface";
import { PaymentDetail } from "../type/PaymentDetai.type";
export class VariablePayment extends model implements IModel {
  constructor(
    public plazo: number,
    public interes: number,
    public prestamo: number,
    public basepayment: number = 1
  ) {
    super(plazo, interes, prestamo);
  }
  payments: PaymentDetail | undefined;
  private _payments: PaymentDetail[] = [];
  // method public
  public GetPaymentDetails(): PaymentDetail[] {
    return this.calculatePaymentDetails();
  }
  // method protected and private
  protected calculatePaymentDetails(): PaymentDetail[] {
    const customRounding = new CustomRounding();
    const ConvertToDecimal = new convertToDecimal();
    this._payments = [];
    let monthlyInterest = this.calculateMonthlyInterest(
      this.interes + ConvertToDecimal.getdecimalize(this.basepayment),
      this.plazo
    );
    for (let i = 1; i <= this.plazo; i++) {
      let interest = this.prestamo * monthlyInterest;
      let principal = this.prestamo / (this.plazo - i + 1);
      let payment = principal + interest;
      let balance = this.prestamo - principal;

      let paymentDetail: PaymentDetail = {
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
