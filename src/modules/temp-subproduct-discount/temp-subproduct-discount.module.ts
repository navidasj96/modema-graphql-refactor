import { Module } from '@nestjs/common';
import { TempSubproductDiscountService } from './temp-subproduct-discount.service';
import { TempSubproductDiscountResolver } from './temp-subproduct-discount.resolver';
import { TempSubproductDiscount } from '@/modules/temp-subproduct-discount/entities/temp-subproduct-discount.entity';
import { TempSubproductDiscount as TempSubproductDiscountGraphQL } from '@/modules/temp-subproduct-discount/domain/temp-subproduct-discount';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateTempSubproductDiscountInput } from '@/modules/temp-subproduct-discount/dto/create-temp-subproduct-discount.input';

@Module({
  providers: [TempSubproductDiscountResolver, TempSubproductDiscountService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TempSubproductDiscount])],
      resolvers: [
        {
          EntityClass: TempSubproductDiscount,
          DTOClass: TempSubproductDiscountGraphQL,
          CreateDTOClass: CreateTempSubproductDiscountInput,
        },
      ],
    }),
  ],
})
export class TempSubproductDiscountModule {}
