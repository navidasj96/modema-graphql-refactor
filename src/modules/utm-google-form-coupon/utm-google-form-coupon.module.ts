import { Module } from '@nestjs/common';
import { UtmGoogleFormCouponService } from './utm-google-form-coupon.service';
import { UtmGoogleFormCouponResolver } from './utm-google-form-coupon.resolver';
import { UtmGoogleFormCoupon } from '@/modules/utm-google-form-coupon/entities/utm-google-form-coupon.entity';
import { UtmGoogleFormCoupon as UtmGoogleFormCouponGraphQL } from '@/modules/utm-google-form-coupon/domain/utm-google-form-coupon';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateUtmGoogleFormCouponInput } from '@/modules/utm-google-form-coupon/dto/create-utm-google-form-coupon.input';

@Module({
  providers: [UtmGoogleFormCouponResolver, UtmGoogleFormCouponService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([UtmGoogleFormCoupon])],
      resolvers: [
        {
          EntityClass: UtmGoogleFormCoupon,
          DTOClass: UtmGoogleFormCouponGraphQL,
          CreateDTOClass: CreateUtmGoogleFormCouponInput,
        },
      ],
    }),
  ],
})
export class UtmGoogleFormCouponModule {}
