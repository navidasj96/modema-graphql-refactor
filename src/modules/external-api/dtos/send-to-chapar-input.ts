import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';

export class SendToChaparInput {
  invoice: Invoice;
  invoiceAddress: InvoiceAddress;
  options: {
    assignedPieces: number;
    service: string;
    value: number;
    paymentType: number;
    weight: number;
    inv_value: number;
  };
}
