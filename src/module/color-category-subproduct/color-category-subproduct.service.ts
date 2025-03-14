import { Injectable } from '@nestjs/common';
import { CreateColorCategorySubproductInput } from './dto/create-color-category-subproduct.input';
import { UpdateColorCategorySubproductInput } from './dto/update-color-category-subproduct.input';

@Injectable()
export class ColorCategorySubproductService {
  create(createColorCategorySubproductInput: CreateColorCategorySubproductInput) {
    return 'This action adds a new colorCategorySubproduct';
  }

  findAll() {
    return `This action returns all colorCategorySubproduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colorCategorySubproduct`;
  }

  update(id: number, updateColorCategorySubproductInput: UpdateColorCategorySubproductInput) {
    return `This action updates a #${id} colorCategorySubproduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} colorCategorySubproduct`;
  }
}
