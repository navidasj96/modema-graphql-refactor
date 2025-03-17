import { Module } from '@nestjs/common';
import { ProductCategoryRateService } from './product-category-rate.service';
import { ProductCategoryRateResolver } from './product-category-rate.resolver';
import { ProductCategoryRate } from '@/modules/product-category-rate/entities/product-category-rate.entity';
import { ProductCategoryRate as ProductCategoryRateGraphQL } from '@/modules/product-category-rate/domain/product-category-rate';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductCategoryRateInput } from '@/modules/product-category-rate/dto/create-product-category-rate.input';

@Module({
  providers: [ProductCategoryRateResolver, ProductCategoryRateService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductCategoryRate])],
      resolvers: [
        {
          EntityClass: ProductCategoryRate,
          DTOClass: ProductCategoryRateGraphQL,
          CreateDTOClass: CreateProductCategoryRateInput,
        },
      ],
    }),
  ],
})
export class ProductCategoryRateModule {}
