import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { VisitorCouponService } from './visitor-coupon.service';
import { CreateVisitorCouponInput } from './dto/create-visitor-coupon.input';
import { UpdateVisitorCouponInput } from './dto/update-visitor-coupon.input';
import { VisitorCoupon } from '@/modules/visitor-coupon/domain/visitor-coupon';

@Resolver(() => VisitorCoupon)
export class VisitorCouponResolver {
  constructor(private readonly visitorCouponService: VisitorCouponService) {}

  @Mutation(() => VisitorCoupon)
  createVisitorCoupon(
    @Args('createVisitorCouponInput')
    createVisitorCouponInput: CreateVisitorCouponInput,
  ) {
    return this.visitorCouponService.create(createVisitorCouponInput);
  }

  @Query(() => [VisitorCoupon], { name: 'visitorCoupon' })
  findAll() {
    return this.visitorCouponService.findAll();
  }

  @Query(() => VisitorCoupon, { name: 'visitorCoupon' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.visitorCouponService.findOne(id);
  }

  @Mutation(() => VisitorCoupon)
  updateVisitorCoupon(
    @Args('updateVisitorCouponInput')
    updateVisitorCouponInput: UpdateVisitorCouponInput,
  ) {
    return this.visitorCouponService.update(
      updateVisitorCouponInput.id,
      updateVisitorCouponInput,
    );
  }

  @Mutation(() => VisitorCoupon)
  removeVisitorCoupon(@Args('id', { type: () => Int }) id: number) {
    return this.visitorCouponService.remove(id);
  }
}
