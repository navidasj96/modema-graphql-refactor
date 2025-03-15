import { Injectable } from '@nestjs/common';
import { CreatePriceGroupInput } from './dto/create-price-group.input';
import { UpdatePriceGroupInput } from './dto/update-price-group.input';

@Injectable()
export class PriceGroupService {
  create(createPriceGroupInput: CreatePriceGroupInput) {
    return 'This action adds a new priceGroup';
  }

  findAll() {
    return `This action returns all priceGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} priceGroup`;
  }

  update(id: number, updatePriceGroupInput: UpdatePriceGroupInput) {
    return `This action updates a #${id} priceGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} priceGroup`;
  }
}
