import { Injectable } from '@nestjs/common';
import { CreateReturnedInvoiceProductInput } from './dto/create-returned-invoice-product.input';
import { UpdateReturnedInvoiceProductInput } from './dto/update-returned-invoice-product.input';

@Injectable()
export class ReturnedInvoiceProductService {
  create(createReturnedInvoiceProductInput: CreateReturnedInvoiceProductInput) {
    return 'This action adds a new returnedInvoiceProduct';
  }

  findAll() {
    return `This action returns all returnedInvoiceProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnedInvoiceProduct`;
  }

  update(
    id: number,
    updateReturnedInvoiceProductInput: UpdateReturnedInvoiceProductInput
  ) {
    return `This action updates a #${id} returnedInvoiceProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnedInvoiceProduct`;
  }
}
