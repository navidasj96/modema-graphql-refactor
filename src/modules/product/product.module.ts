import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { Product } from '@/modules/product/entities/product.entity';
import { Product as ProductGraphQL } from '@/modules/product/domain/product';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductInput } from '@/modules/product/dto/create-product.input';

@Module({
  providers: [ProductResolver, ProductService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Product])],
      resolvers: [
        {
          EntityClass: Product,
          DTOClass: ProductGraphQL,
          CreateDTOClass: CreateProductInput,
        },
      ],
    }),
  ],
})
export class ProductModule {}
