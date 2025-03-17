import { Module } from '@nestjs/common';
import { ProductRateAverageService } from './product-rate-average.service';
import { ProductRateAverageResolver } from './product-rate-average.resolver';
import { ProductRateAverage } from '@/modules/product-rate-average/entities/product-rate-average.entity';
import { ProductRateAverage as ProductRateAverageGraphQL } from '@/modules/product-rate-average/domain/product-rate-average';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductRateAverageInput } from '@/modules/product-rate-average/dto/create-product-rate-average.input';

@Module({
  providers: [ProductRateAverageResolver, ProductRateAverageService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductRateAverage])],
      resolvers: [
        {
          EntityClass: ProductRateAverage,
          DTOClass: ProductRateAverageGraphQL,
          CreateDTOClass: CreateProductRateAverageInput,
        },
      ],
    }),
  ],
})
export class ProductRateAverageModule {}
