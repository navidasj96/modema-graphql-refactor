import { Injectable } from '@nestjs/common';
import { CreateRelatedProductInput } from './dto/create-related-product.input';
import { UpdateRelatedProductInput } from './dto/update-related-product.input';

@Injectable()
export class RelatedProductService {
  create(createRelatedProductInput: CreateRelatedProductInput) {
    return 'This action adds a new relatedProduct';
  }

  findAll() {
    return `This action returns all relatedProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} relatedProduct`;
  }

  update(id: number, updateRelatedProductInput: UpdateRelatedProductInput) {
    return `This action updates a #${id} relatedProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} relatedProduct`;
  }
}
