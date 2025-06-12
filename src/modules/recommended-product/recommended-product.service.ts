import { Injectable } from '@nestjs/common';
import { CreateRecommendedProductInput } from './dto/create-recommended-product.input';
import { UpdateRecommendedProductInput } from './dto/update-recommended-product.input';

@Injectable()
export class RecommendedProductService {
  create(createRecommendedProductInput: CreateRecommendedProductInput) {
    return 'This action adds a new recommendedProduct';
  }

  findAll() {
    return `This action returns all recommendedProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recommendedProduct`;
  }

  update(
    id: number,
    updateRecommendedProductInput: UpdateRecommendedProductInput
  ) {
    return `This action updates a #${id} recommendedProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} recommendedProduct`;
  }
}
