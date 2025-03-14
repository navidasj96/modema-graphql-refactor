import { Injectable } from '@nestjs/common';

@Injectable()
export class AttributeGroupService {
  create() {
    return 'This action adds a new attributeGroup';
  }

  findAll() {
    return `This action returns all attributeGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributeGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeGroup`;
  }
}
