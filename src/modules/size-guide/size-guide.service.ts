import { Injectable } from '@nestjs/common';
import { CreateSizeGuideInput } from './dto/create-size-guide.input';
import { UpdateSizeGuideInput } from './dto/update-size-guide.input';

@Injectable()
export class SizeGuideService {
  create(createSizeGuideInput: CreateSizeGuideInput) {
    return 'This action adds a new sizeGuide';
  }

  findAll() {
    return `This action returns all sizeGuide`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sizeGuide`;
  }

  update(id: number, updateSizeGuideInput: UpdateSizeGuideInput) {
    return `This action updates a #${id} sizeGuide`;
  }

  remove(id: number) {
    return `This action removes a #${id} sizeGuide`;
  }
}
