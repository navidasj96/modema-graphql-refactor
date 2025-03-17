import { Injectable } from '@nestjs/common';
import { CreateRipTemplateInput } from './dto/create-rip-template.input';
import { UpdateRipTemplateInput } from './dto/update-rip-template.input';

@Injectable()
export class RipTemplateService {
  create(createRipTemplateInput: CreateRipTemplateInput) {
    return 'This action adds a new ripTemplate';
  }

  findAll() {
    return `This action returns all ripTemplate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ripTemplate`;
  }

  update(id: number, updateRipTemplateInput: UpdateRipTemplateInput) {
    return `This action updates a #${id} ripTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} ripTemplate`;
  }
}
