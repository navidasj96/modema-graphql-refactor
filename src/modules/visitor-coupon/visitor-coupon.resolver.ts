import { Resolver } from '@nestjs/graphql';
import { VisitorCouponService } from './visitor-coupon.service';
import { VisitorCoupon } from '@/modules/visitor-coupon/domain/visitor-coupon';

@Resolver(() => VisitorCoupon)
export class VisitorCouponResolver {
  constructor(private readonly visitorCouponService: VisitorCouponService) {}
}
