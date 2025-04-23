import { Injectable } from '@nestjs/common';
import { CreateInvoiceInput } from './dto/create-invoice.input';
import { UpdateInvoiceInput } from './dto/update-invoice.input';
import { InvoiceListProvider } from '@/modules/invoice/providers/invoice-list.provider';
import { UserContext } from '@/modules/auth/interfaces/UserContext';

@Injectable()
export class InvoiceService {
  constructor(
    /**
     * inject invoiceListProvider
     */
    private readonly invoiceListProvider: InvoiceListProvider,
  ) {}

  create(createInvoiceInput: CreateInvoiceInput) {
    return 'This action adds a new invoice';
  }

  findAll() {
    return `This action returns all invoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  update(id: number, updateInvoiceInput: UpdateInvoiceInput) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }

  async invoiceList(context: { req: UserContext }) {
    return await this.invoiceListProvider.invoiceList(context);
  }
}
