import { model } from "../../model";
import { CustomRounding } from "../../utils/customRound.utils";
import { IModel } from "../interface/Imodel.interface";
import { PaymentDetail } from "../type/PaymentDetai.type";

export class gracePeriods extends model implements IModel {
  constructor(
    public plazo: number,
    public interes: number,
    public prestamo: number,
    public gracePeriod: number
  ) {
    super(plazo, interes, prestamo);
  }
  payments: PaymentDetail | undefined;
  private _payments: PaymentDetail[] = [];
  // methods public
  public GetPaymentDetails(): PaymentDetail[] {
    return this.calculatePaymentDetails();
  }
  public async GetFixedPayment(): Promise<PaymentDetail[]> {
    return await this.calculateFixedPaymentDetails().then((res) => {
      return res;
    });
  }
  // methods protected
  protected calculatePaymentDetails(): PaymentDetail[] {
    let monthlyInterest = this.calculateMonthlyInterest(
      this.interes,
      this.plazo
    );

    for (let i = 1; i <= this.plazo; i++) {
      const customRounding = new CustomRounding();
      let interest = this.prestamo * monthlyInterest;
      let payment;
      let principal;
      let balance;

      if (i <= this.gracePeriod) {
        payment = interest;
        principal = 0;
        balance = this.prestamo;
      } else {
        principal = this.prestamo / (this.plazo - i + 1);
        payment = principal + interest;
        balance = this.prestamo - principal;
      }

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
  protected async calculateFixedPaymentDetails(): Promise<PaymentDetail[]> {
    return new Promise(async (resolve, reject) => {
      let monthlyInterest = await this.calculateMonthlyInterest(
        this.interes,
        this.plazo
      );
      const customRounding = await new CustomRounding();
      for (let i = 1; i <= this.plazo; i++) {
        let interest =  this.prestamo * monthlyInterest;
        let payment: any;
        let principal: number;
        let balance: number;

        if (i <= this.gracePeriod) {
          payment = await interest;
          principal = 0;
          balance = (await this.prestamo) + payment;
        } else {
          let Principal: number = payment ? payment - interest : 0;
          payment = Number(
            this.calculatePaymentAmount(
              this.plazo - i + 1,
              monthlyInterest,
              this.prestamo - Principal
            )!.toFixed(1)
          );
          principal = payment - interest;
          balance = this.prestamo - principal;
        }

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
      resolve(this._payments);
    });
  }
}
