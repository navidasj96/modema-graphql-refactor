import { Module } from '@nestjs/common';
import { ProductCommentLikeService } from './product-comment-like.service';
import { ProductCommentLikeResolver } from './product-comment-like.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCommentLike } from '@/modules/product-comment-like/entities/product-comment-like.entity';
import { ProductCommentLike as ProductCommentLikeGraphQL } from '@/modules/product-comment-like/domain/product-comment-like';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductCommentLikeInput } from '@/modules/product-comment-like/dto/create-product-comment-like.input';

@Module({
  providers: [ProductCommentLikeResolver, ProductCommentLikeService],
  imports: [
    TypeOrmModule.forFeature([ProductCommentLike]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductCommentLike])],
      resolvers: [
        {
          EntityClass: ProductCommentLike,
          DTOClass: ProductCommentLikeGraphQL,
          CreateDTOClass: CreateProductCommentLikeInput,
        },
      ],
    }),
  ],
})
export class ProductCommentLikeModule {}
