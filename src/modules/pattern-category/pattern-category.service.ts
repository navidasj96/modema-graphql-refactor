import { Injectable } from '@nestjs/common';
import { CreatePatternCategoryInput } from './dto/create-pattern-category.input';
import { UpdatePatternCategoryInput } from './dto/update-pattern-category.input';

@Injectable()
export class PatternCategoryService {
  create(createPatternCategoryInput: CreatePatternCategoryInput) {
    return 'This action adds a new patternCategory';
  }

  findAll() {
    return `This action returns all patternCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patternCategory`;
  }

  update(id: number, updatePatternCategoryInput: UpdatePatternCategoryInput) {
    return `This action updates a #${id} patternCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} patternCategory`;
  }
}
