import { Injectable } from '@nestjs/common';
import { CreateVisitorCouponInput } from './dto/create-visitor-coupon.input';
import { UpdateVisitorCouponInput } from './dto/update-visitor-coupon.input';

@Injectable()
export class VisitorCouponService {
  create(createVisitorCouponInput: CreateVisitorCouponInput) {
    return 'This action adds a new visitorCoupon';
  }

  findAll() {
    return `This action returns all visitorCoupon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visitorCoupon`;
  }

  update(id: number, updateVisitorCouponInput: UpdateVisitorCouponInput) {
    return `This action updates a #${id} visitorCoupon`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitorCoupon`;
  }
}
