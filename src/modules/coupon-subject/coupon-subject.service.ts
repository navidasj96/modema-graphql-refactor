import { Injectable } from '@nestjs/common';
import { CreateCouponSubjectInput } from './dto/create-coupon-subject.input';
import { UpdateCouponSubjectInput } from './dto/update-coupon-subject.input';

@Injectable()
export class CouponSubjectService {
  create(createCouponSubjectInput: CreateCouponSubjectInput) {
    return 'This action adds a new couponSubject';
  }

  findAll() {
    return `This action returns all couponSubject`;
  }

  findOne(id: number) {
    return `This action returns a #${id} couponSubject`;
  }

  update(id: number, updateCouponSubjectInput: UpdateCouponSubjectInput) {
    return `This action updates a #${id} couponSubject`;
  }

  remove(id: number) {
    return `This action removes a #${id} couponSubject`;
  }
}
