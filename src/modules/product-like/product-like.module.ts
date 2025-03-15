import { Module } from '@nestjs/common';
import { ProductLikeService } from './product-like.service';
import { ProductLikeResolver } from './product-like.resolver';
import { ProductLike } from '@/modules/product-like/entities/product-like.entity';
import { ProductLike as ProductLikeGraphQL } from '@/modules/product-like/domain/product-like';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductLikeInput } from '@/modules/product-like/dto/create-product-like.input';

@Module({
  providers: [ProductLikeResolver, ProductLikeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductLike])],
      resolvers: [
        {
          EntityClass: ProductLike,
          DTOClass: ProductLikeGraphQL,
          CreateDTOClass: CreateProductLikeInput,
        },
      ],
    }),
  ],
})
export class ProductLikeModule {}
