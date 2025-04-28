import { Injectable } from '@nestjs/common';
import { CreateInvoiceInput } from './dto/create-invoice.input';
import { UpdateInvoiceInput } from './dto/update-invoice.input';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CheckSimilarInvoiceWithNameProvider } from '@/modules/invoice/providers/check-similar-invoice-with-name.provider';
import { CheckSimilarInvoiceWithNameInput } from '@/modules/invoice/dto/check-similar-invoice-with-name.input.dto';

@Injectable()
export class InvoiceService {
  constructor(
    private readonly checkSimilarInvoiceWithNameProvider: CheckSimilarInvoiceWithNameProvider
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

  async checkSimilarInvoiceWithName(
    userInfo: CheckSimilarInvoiceWithNameInput[]
  ) {
    return await this.checkSimilarInvoiceWithNameProvider.checkSimilarInvoiceWithName(
      userInfo
    );
  }
}
