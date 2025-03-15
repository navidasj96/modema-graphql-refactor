import { Module } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { ProductCategoryResolver } from './product-category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from '@/modules/product-category/entities/product-category.entity';
import { ProductCategory as ProductCategoryGraphQL } from '@/modules/product-category/domain/product-category';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductCategoryInput } from '@/modules/product-category/dto/create-product-category.input';

@Module({
  providers: [ProductCategoryResolver, ProductCategoryService],
  imports: [
    TypeOrmModule.forFeature([ProductCategory]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductCategory])],
      resolvers: [
        {
          EntityClass: ProductCategory,
          DTOClass: ProductCategoryGraphQL,
          CreateDTOClass: CreateProductCategoryInput,
        },
      ],
    }),
  ],
})
export class ProductCategoryModule {}
