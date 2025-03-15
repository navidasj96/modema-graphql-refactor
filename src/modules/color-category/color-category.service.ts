import { Injectable } from '@nestjs/common';
import { CreateColorCategoryInput } from './dto/create-color-category.input';
import { UpdateColorCategoryInput } from './dto/update-color-category.input';

@Injectable()
export class ColorCategoryService {
  create(createColorCategoryInput: CreateColorCategoryInput) {
    return 'This action adds a new colorCategory';
  }

  findAll() {
    return `This action returns all colorCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colorCategory`;
  }

  update(id: number, updateColorCategoryInput: UpdateColorCategoryInput) {
    return `This action updates a #${id} colorCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} colorCategory`;
  }
}
