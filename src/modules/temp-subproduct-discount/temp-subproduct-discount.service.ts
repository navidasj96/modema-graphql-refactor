import { Injectable } from '@nestjs/common';
import { CreateTempSubproductDiscountInput } from './dto/create-temp-subproduct-discount.input';
import { UpdateTempSubproductDiscountInput } from './dto/update-temp-subproduct-discount.input';

@Injectable()
export class TempSubproductDiscountService {
  create(createTempSubproductDiscountInput: CreateTempSubproductDiscountInput) {
    return 'This action adds a new tempSubproductDiscount';
  }

  findAll() {
    return `This action returns all tempSubproductDiscount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tempSubproductDiscount`;
  }

  update(id: number, updateTempSubproductDiscountInput: UpdateTempSubproductDiscountInput) {
    return `This action updates a #${id} tempSubproductDiscount`;
  }

  remove(id: number) {
    return `This action removes a #${id} tempSubproductDiscount`;
  }
}
