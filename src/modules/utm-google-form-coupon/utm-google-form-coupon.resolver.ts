import { Resolver } from '@nestjs/graphql';
import { UtmGoogleFormCouponService } from './utm-google-form-coupon.service';
import { UtmGoogleFormCoupon } from '@/modules/utm-google-form-coupon/domain/utm-google-form-coupon';

@Resolver(() => UtmGoogleFormCoupon)
export class UtmGoogleFormCouponResolver {
  constructor(
    private readonly utmGoogleFormCouponService: UtmGoogleFormCouponService
  ) {}
}
