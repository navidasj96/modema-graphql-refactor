import { Injectable } from '@nestjs/common';
import { CreateColorCategoryDetailInput } from './dto/create-color-category-detail.input';
import { UpdateColorCategoryDetailInput } from './dto/update-color-category-detail.input';

@Injectable()
export class ColorCategoryDetailService {
  create(createColorCategoryDetailInput: CreateColorCategoryDetailInput) {
    return 'This action adds a new colorCategoryDetail';
  }

  findAll() {
    return `This action returns all colorCategoryDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colorCategoryDetail`;
  }

  update(id: number, updateColorCategoryDetailInput: UpdateColorCategoryDetailInput) {
    return `This action updates a #${id} colorCategoryDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} colorCategoryDetail`;
  }
}
