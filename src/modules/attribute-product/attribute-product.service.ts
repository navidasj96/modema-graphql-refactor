import { Injectable } from '@nestjs/common';
import { CreateAttributeProductInput } from './dto/create-attribute-product.input';
import { UpdateAttributeProductInput } from './dto/update-attribute-product.input';

@Injectable()
export class AttributeProductService {
  create(createAttributeProductInput: CreateAttributeProductInput) {
    return 'This action adds a new attributeProduct';
  }

  findAll() {
    return `This action returns all attributeProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributeProduct`;
  }

  update(id: number, updateAttributeProductInput: UpdateAttributeProductInput) {
    return `This action updates a #${id} attributeProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeProduct`;
  }
}
