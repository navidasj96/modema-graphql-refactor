import { Module } from '@nestjs/common';
import { VisitorCouponService } from './visitor-coupon.service';
import { VisitorCouponResolver } from './visitor-coupon.resolver';
import { VisitorCoupon } from '@/modules/visitor-coupon/entities/visitor-coupon.entity';
import { VisitorCoupon as VisitorCouponGraphQL } from '@/modules/visitor-coupon/domain/visitor-coupon';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateVisitorCouponInput } from '@/modules/visitor-coupon/dto/create-visitor-coupon.input';

@Module({
  providers: [VisitorCouponResolver, VisitorCouponService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([VisitorCoupon])],
      resolvers: [
        {
          EntityClass: VisitorCoupon,
          DTOClass: VisitorCouponGraphQL,
          CreateDTOClass: CreateVisitorCouponInput,
        },
      ],
    }),
  ],
})
export class VisitorCouponModule {}
