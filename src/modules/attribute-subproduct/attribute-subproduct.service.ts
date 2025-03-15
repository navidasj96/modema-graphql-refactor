import { Injectable } from '@nestjs/common';
import { CreateAttributeSubproductInput } from './dto/create-attribute-subproduct.input';
import { UpdateAttributeSubproductInput } from './dto/update-attribute-subproduct.input';

@Injectable()
export class AttributeSubproductService {
  create(createAttributeSubproductInput: CreateAttributeSubproductInput) {
    return 'This action adds a new attributeSubproduct';
  }

  findAll() {
    return `This action returns all attributeSubproduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributeSubproduct`;
  }

  update(id: number, updateAttributeSubproductInput: UpdateAttributeSubproductInput) {
    return `This action updates a #${id} attributeSubproduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeSubproduct`;
  }
}
