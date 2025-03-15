import { Module } from '@nestjs/common';
import { ProductCategoryDetailService } from './product-category-detail.service';
import { ProductCategoryDetailResolver } from './product-category-detail.resolver';
import { ProductCategoryDetail } from '@/modules/product-category-detail/entities/product-category-detail.entity';
import { ProductCategoryDetail as ProductCategoryDetailGraphQL } from '@/modules/product-category-detail/domain/product-category-detail';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductCategoryDetailInput } from '@/modules/product-category-detail/dto/create-product-category-detail.input';

@Module({
  providers: [ProductCategoryDetailResolver, ProductCategoryDetailService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductCategoryDetail])],
      resolvers: [
        {
          EntityClass: ProductCategoryDetail,
          DTOClass: ProductCategoryDetailGraphQL,
          CreateDTOClass: CreateProductCategoryDetailInput,
        },
      ],
    }),
  ],
})
export class ProductCategoryDetailModule {}
