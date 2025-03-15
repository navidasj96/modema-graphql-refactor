import { Module } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DiscountResolver } from './discount.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Discount } from './entities/discount.entity';
import { Discount as DiscountGraphQL } from './domain/discount';
import { CreateDiscountInput } from './dto/create-discount.input';

@Module({
  providers: [DiscountResolver, DiscountService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Discount])],
      resolvers: [
        {
          EntityClass: Discount,
          DTOClass: DiscountGraphQL,
          CreateDTOClass: CreateDiscountInput,
        },
      ],
    }),
  ],
})
export class DiscountModule {}
