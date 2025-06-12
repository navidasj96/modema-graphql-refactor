import { Injectable } from '@nestjs/common';
import { CreateUtmGoogleFormCouponInput } from './dto/create-utm-google-form-coupon.input';
import { UpdateUtmGoogleFormCouponInput } from './dto/update-utm-google-form-coupon.input';

@Injectable()
export class UtmGoogleFormCouponService {
  create(createUtmGoogleFormCouponInput: CreateUtmGoogleFormCouponInput) {
    return 'This action adds a new utmGoogleFormCoupon';
  }

  findAll() {
    return `This action returns all utmGoogleFormCoupon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} utmGoogleFormCoupon`;
  }

  update(
    id: number,
    updateUtmGoogleFormCouponInput: UpdateUtmGoogleFormCouponInput
  ) {
    return `This action updates a #${id} utmGoogleFormCoupon`;
  }

  remove(id: number) {
    return `This action removes a #${id} utmGoogleFormCoupon`;
  }
}
