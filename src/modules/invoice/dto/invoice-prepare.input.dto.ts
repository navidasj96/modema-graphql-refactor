import { Invoice } from '@/modules/invoice/entities/invoice.entity';

export class InvoicePrepareInput {
  userId: number;
  data: { invoice: Invoice };
}
