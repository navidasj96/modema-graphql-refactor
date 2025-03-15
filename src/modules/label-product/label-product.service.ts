import { Injectable } from '@nestjs/common';
import { CreateLabelProductInput } from './dto/create-label-product.input';
import { UpdateLabelProductInput } from './dto/update-label-product.input';

@Injectable()
export class LabelProductService {
  create(createLabelProductInput: CreateLabelProductInput) {
    return 'This action adds a new labelProduct';
  }

  findAll() {
    return `This action returns all labelProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} labelProduct`;
  }

  update(id: number, updateLabelProductInput: UpdateLabelProductInput) {
    return `This action updates a #${id} labelProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} labelProduct`;
  }
}
