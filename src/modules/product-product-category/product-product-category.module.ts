import { Module } from '@nestjs/common';
import { ProductProductCategoryService } from './product-product-category.service';
import { ProductProductCategoryResolver } from './product-product-category.resolver';
import { ProductProductCategory } from '@/modules/product-product-category/entities/product-product-category.entity';
import { ProductProductCategory as ProductProductCategoryGraphQL } from '@/modules/product-product-category/domain/product-product-category';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductProductCategoryInput } from '@/modules/product-product-category/dto/create-product-product-category.input';

@Module({
  providers: [ProductProductCategoryResolver, ProductProductCategoryService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductProductCategory])],
      resolvers: [
        {
          EntityClass: ProductProductCategory,
          DTOClass: ProductProductCategoryGraphQL,
          CreateDTOClass: CreateProductProductCategoryInput,
        },
      ],
    }),
  ],
})
export class ProductProductCategoryModule {}
