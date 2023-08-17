export interface ICredit {
  plazo: number;
  interes: number;
  prestamo: number;

  GetMonthlyInterest(interes: number, plazo: number): number;
  GetPayment(plazo: number, interes: number, prestamo: number): number;
}