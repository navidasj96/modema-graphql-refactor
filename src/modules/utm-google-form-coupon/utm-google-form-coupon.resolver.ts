import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UtmGoogleFormCouponService } from './utm-google-form-coupon.service';
import { CreateUtmGoogleFormCouponInput } from './dto/create-utm-google-form-coupon.input';
import { UpdateUtmGoogleFormCouponInput } from './dto/update-utm-google-form-coupon.input';
import { UtmGoogleFormCoupon } from '@/modules/utm-google-form-coupon/domain/utm-google-form-coupon';

@Resolver(() => UtmGoogleFormCoupon)
export class UtmGoogleFormCouponResolver {
  constructor(
    private readonly utmGoogleFormCouponService: UtmGoogleFormCouponService,
  ) {}

  @Mutation(() => UtmGoogleFormCoupon)
  createUtmGoogleFormCoupon(
    @Args('createUtmGoogleFormCouponInput')
    createUtmGoogleFormCouponInput: CreateUtmGoogleFormCouponInput,
  ) {
    return this.utmGoogleFormCouponService.create(
      createUtmGoogleFormCouponInput,
    );
  }

  @Query(() => [UtmGoogleFormCoupon], { name: 'utmGoogleFormCoupon' })
  findAll() {
    return this.utmGoogleFormCouponService.findAll();
  }

  @Query(() => UtmGoogleFormCoupon, { name: 'utmGoogleFormCoupon' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.utmGoogleFormCouponService.findOne(id);
  }

  @Mutation(() => UtmGoogleFormCoupon)
  updateUtmGoogleFormCoupon(
    @Args('updateUtmGoogleFormCouponInput')
    updateUtmGoogleFormCouponInput: UpdateUtmGoogleFormCouponInput,
  ) {
    return this.utmGoogleFormCouponService.update(
      updateUtmGoogleFormCouponInput.id,
      updateUtmGoogleFormCouponInput,
    );
  }

  @Mutation(() => UtmGoogleFormCoupon)
  removeUtmGoogleFormCoupon(@Args('id', { type: () => Int }) id: number) {
    return this.utmGoogleFormCouponService.remove(id);
  }
}
