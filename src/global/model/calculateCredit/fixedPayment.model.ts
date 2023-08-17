import { model } from "../../model";
import { IModel } from "../interface/Imodel.interface";
import { PaymentDetail } from "../type/PaymentDetai.type";
import { CustomRounding } from "../../utils/customRound.utils";

export class fixedPayment extends model implements IModel {
  // Constructor
  constructor(
    public plazo: number,
    public interes: number = 18,
    public prestamo: number = 100000
  ) {
    super(plazo, interes, prestamo);
  }

  public payments: PaymentDetail | undefined;
  private _payments: PaymentDetail[] = [];

  // methods public

  public GetPaymentDetails(): PaymentDetail[] {
    return this.calculatePaymentDetails();
  }
  // methods protected and private
  balancePayment: number = this.prestamo;
  protected calculatePaymentDetails(): PaymentDetail[] {
    const customRounding = new CustomRounding();
    let monthlyInterest = this.calculateMonthlyInterest(
      this.interes,
      this.plazo
    );
    let payment = Number(
      this.calculatePaymentAmount(
        this.plazo ,
        monthlyInterest,
        this.prestamo
      )!.toFixed(2)
    );
    for (let i = 1; i <= this.plazo; i++) {
      let interest = this.balancePayment * monthlyInterest;
      let principal = payment - interest;
      let balance = this.balancePayment - principal;

      let paymentDetail: PaymentDetail = {
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
