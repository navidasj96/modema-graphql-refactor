import { Injectable } from '@nestjs/common';
import { CreateCarpetUsagePlaceInvoiceProductInput } from './dto/create-carpet-usage-place-invoice-product.input';
import { UpdateCarpetUsagePlaceInvoiceProductInput } from './dto/update-carpet-usage-place-invoice-product.input';

@Injectable()
export class CarpetUsagePlaceInvoiceProductService {
  create(createCarpetUsagePlaceInvoiceProductInput: CreateCarpetUsagePlaceInvoiceProductInput) {
    return 'This action adds a new carpetUsagePlaceInvoiceProduct';
  }

  findAll() {
    return `This action returns all carpetUsagePlaceInvoiceProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carpetUsagePlaceInvoiceProduct`;
  }

  update(id: number, updateCarpetUsagePlaceInvoiceProductInput: UpdateCarpetUsagePlaceInvoiceProductInput) {
    return `This action updates a #${id} carpetUsagePlaceInvoiceProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} carpetUsagePlaceInvoiceProduct`;
  }
}
