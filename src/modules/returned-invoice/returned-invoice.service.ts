import { Injectable } from '@nestjs/common';
import { CreateReturnedInvoiceInput } from './dto/create-returned-invoice.input';
import { UpdateReturnedInvoiceInput } from './dto/update-returned-invoice.input';

@Injectable()
export class ReturnedInvoiceService {
  create(createReturnedInvoiceInput: CreateReturnedInvoiceInput) {
    return 'This action adds a new returnedInvoice';
  }

  findAll() {
    return `This action returns all returnedInvoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnedInvoice`;
  }

  update(id: number, updateReturnedInvoiceInput: UpdateReturnedInvoiceInput) {
    return `This action updates a #${id} returnedInvoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnedInvoice`;
  }
}
