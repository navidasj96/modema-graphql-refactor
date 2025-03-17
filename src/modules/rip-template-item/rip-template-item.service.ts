import { Injectable } from '@nestjs/common';
import { CreateRipTemplateItemInput } from './dto/create-rip-template-item.input';
import { UpdateRipTemplateItemInput } from './dto/update-rip-template-item.input';

@Injectable()
export class RipTemplateItemService {
  create(createRipTemplateItemInput: CreateRipTemplateItemInput) {
    return 'This action adds a new ripTemplateItem';
  }

  findAll() {
    return `This action returns all ripTemplateItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ripTemplateItem`;
  }

  update(id: number, updateRipTemplateItemInput: UpdateRipTemplateItemInput) {
    return `This action updates a #${id} ripTemplateItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} ripTemplateItem`;
  }
}
