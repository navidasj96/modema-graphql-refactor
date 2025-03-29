import { Resolver } from '@nestjs/graphql';
import { CouponSubjectService } from './coupon-subject.service';
import { CouponSubject } from './domain/coupon-subject';

@Resolver(() => CouponSubject)
export class CouponSubjectResolver {
  constructor(private readonly couponSubjectService: CouponSubjectService) {}
}
