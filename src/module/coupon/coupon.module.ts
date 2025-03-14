import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Coupon } from './entities/coupon.entity';
import { Coupon as CouponGraphQL } from './domain/coupon';
import { CreateCouponInput } from './dto/create-coupon.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Coupon])],
      resolvers: [
        {
          EntityClass: Coupon,
          DTOClass: CouponGraphQL,
          CreateDTOClass: CreateCouponInput,
        },
      ],
    }),
  ],
})
export class CouponModule {}
