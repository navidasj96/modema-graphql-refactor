import { Injectable } from '@nestjs/common';
import { CreateProductLikeInput } from './dto/create-product-like.input';
import { UpdateProductLikeInput } from './dto/update-product-like.input';

@Injectable()
export class ProductLikeService {
  create(createProductLikeInput: CreateProductLikeInput) {
    return 'This action adds a new productLike';
  }

  findAll() {
    return `This action returns all productLike`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productLike`;
  }

  update(id: number, updateProductLikeInput: UpdateProductLikeInput) {
    return `This action updates a #${id} productLike`;
  }

  remove(id: number) {
    return `This action removes a #${id} productLike`;
  }
}
