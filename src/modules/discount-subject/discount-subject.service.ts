import { Injectable } from '@nestjs/common';
import { CreateDiscountSubjectInput } from './dto/create-discount-subject.input';
import { UpdateDiscountSubjectInput } from './dto/update-discount-subject.input';

@Injectable()
export class DiscountSubjectService {
  create(createDiscountSubjectInput: CreateDiscountSubjectInput) {
    return 'This action adds a new discountSubject';
  }

  findAll() {
    return `This action returns all discountSubject`;
  }

  findOne(id: number) {
    return `This action returns a #${id} discountSubject`;
  }

  update(id: number, updateDiscountSubjectInput: UpdateDiscountSubjectInput) {
    return `This action updates a #${id} discountSubject`;
  }

  remove(id: number) {
    return `This action removes a #${id} discountSubject`;
  }
}
