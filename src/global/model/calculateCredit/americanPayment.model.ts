import { model } from "../../model";
import { IModel } from "../interface/Imodel.interface";
import { PaymentDetail } from "../type/PaymentDetai.type";
import { CustomRounding } from "../../utils/customRound.utils";

export class AmericanPayment extends model implements IModel {
  public constructor(
    public plazo: number,
    public interes: number,
    public prestamo: number
  ) {
    super(plazo, interes, prestamo);
  }
  payments: PaymentDetail | undefined;
  private _payments: PaymentDetail[] = [];

  // method public
  public GetPaymentDetails(): PaymentDetail[] {
    return this.calculatePaymentDetails();
  }
  // method private or protected
  protected override calculatePaymentDetails(): PaymentDetail[] {
    const customRounding = new CustomRounding();
    this._payments = [];
    let monthlyInterest = this.calculateMonthlyInterest(
      this.interes,
      this.plazo
    );
    for (let i = 1; i <= this.plazo; i++) {
      let interest = this.prestamo * monthlyInterest;
      let payment = i === this.plazo ? this.prestamo + interest : interest; // In the last year, the capital is paid along with the interest
      let principal = i === this.plazo ? this.prestamo : 0;
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
