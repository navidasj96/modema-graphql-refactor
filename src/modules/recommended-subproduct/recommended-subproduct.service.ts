import { Injectable } from '@nestjs/common';
import { CreateRecommendedSubproductInput } from './dto/create-recommended-subproduct.input';
import { UpdateRecommendedSubproductInput } from './dto/update-recommended-subproduct.input';

@Injectable()
export class RecommendedSubproductService {
  create(createRecommendedSubproductInput: CreateRecommendedSubproductInput) {
    return 'This action adds a new recommendedSubproduct';
  }

  findAll() {
    return `This action returns all recommendedSubproduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recommendedSubproduct`;
  }

  update(id: number, updateRecommendedSubproductInput: UpdateRecommendedSubproductInput) {
    return `This action updates a #${id} recommendedSubproduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} recommendedSubproduct`;
  }
}
