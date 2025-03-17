import { Injectable } from '@nestjs/common';
import { CreateVisitorSaleInput } from './dto/create-visitor-sale.input';
import { UpdateVisitorSaleInput } from './dto/update-visitor-sale.input';

@Injectable()
export class VisitorSaleService {
  create(createVisitorSaleInput: CreateVisitorSaleInput) {
    return 'This action adds a new visitorSale';
  }

  findAll() {
    return `This action returns all visitorSale`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visitorSale`;
  }

  update(id: number, updateVisitorSaleInput: UpdateVisitorSaleInput) {
    return `This action updates a #${id} visitorSale`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitorSale`;
  }
}
