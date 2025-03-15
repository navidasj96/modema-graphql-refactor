import { Injectable } from '@nestjs/common';
import { CreatePriceGroupSizeInput } from './dto/create-price-group-size.input';
import { UpdatePriceGroupSizeInput } from './dto/update-price-group-size.input';

@Injectable()
export class PriceGroupSizeService {
  create(createPriceGroupSizeInput: CreatePriceGroupSizeInput) {
    return 'This action adds a new priceGroupSize';
  }

  findAll() {
    return `This action returns all priceGroupSize`;
  }

  findOne(id: number) {
    return `This action returns a #${id} priceGroupSize`;
  }

  update(id: number, updatePriceGroupSizeInput: UpdatePriceGroupSizeInput) {
    return `This action updates a #${id} priceGroupSize`;
  }

  remove(id: number) {
    return `This action removes a #${id} priceGroupSize`;
  }
}
