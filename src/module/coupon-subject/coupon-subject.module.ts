import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CouponSubject } from './entities/coupon-subject.entity';
import { CouponSubject as CouponSubjectGraphQL } from './domain/coupon-subject';
import { CreateCouponSubjectInput } from './dto/create-coupon-subject.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CouponSubject])],
      resolvers: [
        {
          EntityClass: CouponSubject,
          DTOClass: CouponSubjectGraphQL,
          CreateDTOClass: CreateCouponSubjectInput,
        },
      ],
    }),
  ],
})
export class CouponSubjectModule {}
