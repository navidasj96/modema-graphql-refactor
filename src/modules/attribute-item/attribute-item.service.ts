import { Injectable } from '@nestjs/common';
import { CreateAttributeItemInput } from './dto/create-attribute-item.input';
import { UpdateAttributeItemInput } from './dto/update-attribute-item.input';

@Injectable()
export class AttributeItemService {
  create(createAttributeItemInput: CreateAttributeItemInput) {
    return 'This action adds a new attributeItem';
  }

  findAll() {
    return `This action returns all attributeItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributeItem`;
  }

  update(id: number, updateAttributeItemInput: UpdateAttributeItemInput) {
    return `This action updates a #${id} attributeItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeItem`;
  }
}
