import { ICredit } from "./model/interface/ICredit.interface";
import { PaymentDetail } from "./model/type/PaymentDetai.type";


export abstract class model implements ICredit {
  // Constructor
  protected constructor(
    public plazo: number,
    public interes: number,
    public prestamo: number
  ) {}

  // Métodos públicos que invocan a los métodos protegidos.
  public GetMonthlyInterest(): number {
    return this.calculateMonthlyInterest(this.interes, this.plazo);
  }

  public GetPayment(): number {
    const intereses = this.GetMonthlyInterest();
    return this.calculatePaymentAmount(this.plazo, intereses, this.prestamo);
  }

  // method protected

  protected calculateMonthlyInterest(interes: number, plazo: number): number {
    const INTERESANUAL: number = interes / 100;
    return Number((Math.pow(INTERESANUAL + 1, 1 / plazo) - 1).toFixed(3));
  }
  protected calculatePaymentAmount(
    plazo: number,
    interes: number,
    prestamo: number
  ): number {
    const interestAmount: number = interes * prestamo;
    const denominator: number = 1 - Math.pow(1 + interes, -plazo);
    const paymentAmount: number = interestAmount / denominator;
    return paymentAmount;
  }

  // Métodos abstractos
  protected abstract calculatePaymentDetails(): PaymentDetail[];
  public abstract GetPaymentDetails(): PaymentDetail[];
}
