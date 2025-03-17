import { Injectable } from '@nestjs/common';
import { CreateSizeGuidesDetailInput } from './dto/create-size-guides-detail.input';
import { UpdateSizeGuidesDetailInput } from './dto/update-size-guides-detail.input';

@Injectable()
export class SizeGuidesDetailService {
  create(createSizeGuidesDetailInput: CreateSizeGuidesDetailInput) {
    return 'This action adds a new sizeGuidesDetail';
  }

  findAll() {
    return `This action returns all sizeGuidesDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sizeGuidesDetail`;
  }

  update(id: number, updateSizeGuidesDetailInput: UpdateSizeGuidesDetailInput) {
    return `This action updates a #${id} sizeGuidesDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} sizeGuidesDetail`;
  }
}
