import { Injectable } from '@nestjs/common';
import { CreateTagDetailInput } from './dto/create-tag-detail.input';
import { UpdateTagDetailInput } from './dto/update-tag-detail.input';

@Injectable()
export class TagDetailService {
  create(createTagDetailInput: CreateTagDetailInput) {
    return 'This action adds a new tagDetail';
  }

  findAll() {
    return `This action returns all tagDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tagDetail`;
  }

  update(id: number, updateTagDetailInput: UpdateTagDetailInput) {
    return `This action updates a #${id} tagDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} tagDetail`;
  }
}
