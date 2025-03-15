import { Injectable } from '@nestjs/common';
import { CreateProductCommentInput } from './dto/create-product-comment.input';
import { UpdateProductCommentInput } from './dto/update-product-comment.input';

@Injectable()
export class ProductCommentService {
  create(createProductCommentInput: CreateProductCommentInput) {
    return 'This action adds a new productComment';
  }

  findAll() {
    return `This action returns all productComment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productComment`;
  }

  update(id: number, updateProductCommentInput: UpdateProductCommentInput) {
    return `This action updates a #${id} productComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} productComment`;
  }
}
