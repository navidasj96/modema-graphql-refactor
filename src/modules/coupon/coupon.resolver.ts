import { Resolver } from '@nestjs/graphql';
import { CouponService } from './coupon.service';
import { Coupon } from './domain/coupon';

@Resolver(() => Coupon)
export class CouponResolver {
  constructor(private readonly couponService: CouponService) {}
}
