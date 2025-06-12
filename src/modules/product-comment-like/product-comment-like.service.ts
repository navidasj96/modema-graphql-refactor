import { Injectable } from '@nestjs/common';
import { CreateProductCommentLikeInput } from './dto/create-product-comment-like.input';
import { UpdateProductCommentLikeInput } from './dto/update-product-comment-like.input';

@Injectable()
export class ProductCommentLikeService {
  create(createProductCommentLikeInput: CreateProductCommentLikeInput) {
    return 'This action adds a new productCommentLike';
  }

  findAll() {
    return `This action returns all productCommentLike`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productCommentLike`;
  }

  update(
    id: number,
    updateProductCommentLikeInput: UpdateProductCommentLikeInput
  ) {
    return `This action updates a #${id} productCommentLike`;
  }

  remove(id: number) {
    return `This action removes a #${id} productCommentLike`;
  }
}
