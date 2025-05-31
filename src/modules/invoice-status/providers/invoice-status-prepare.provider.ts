import { InvoiceStatus } from '@/modules/invoice-status/entities/invoice-status.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InvoiceStatusPrepareProvider {
  constructor() {}

  public InvoiceStatusPrepare(invoiceStatus: InvoiceStatus) {
    return {
      id: invoiceStatus.id,
      status: invoiceStatus.status,
      color: invoiceStatus.color,
    };
  }
}
