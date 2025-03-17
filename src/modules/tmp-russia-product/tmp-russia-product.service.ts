import { Injectable } from '@nestjs/common';
import { CreateTmpRussiaProductInput } from './dto/create-tmp-russia-product.input';
import { UpdateTmpRussiaProductInput } from './dto/update-tmp-russia-product.input';

@Injectable()
export class TmpRussiaProductService {
  create(createTmpRussiaProductInput: CreateTmpRussiaProductInput) {
    return 'This action adds a new tmpRussiaProduct';
  }

  findAll() {
    return `This action returns all tmpRussiaProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tmpRussiaProduct`;
  }

  update(id: number, updateTmpRussiaProductInput: UpdateTmpRussiaProductInput) {
    return `This action updates a #${id} tmpRussiaProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} tmpRussiaProduct`;
  }
}
