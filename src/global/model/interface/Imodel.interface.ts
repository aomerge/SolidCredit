import { PaymentDetail } from '../type/PaymentDetai.type';
export interface IModel {
  payments: PaymentDetail | undefined;
  GetPaymentDetails( ): PaymentDetail[];
}