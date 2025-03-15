import { Module } from '@nestjs/common';
import { ProductCommentService } from './product-comment.service';
import { ProductCommentResolver } from './product-comment.resolver';
import { ProductComment } from '@/modules/product-comment/entities/product-comment.entity';
import { ProductComment as ProductCommentGraphQL } from '@/modules/product-comment/domain/product-comment';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductCommentInput } from '@/modules/product-comment/dto/create-product-comment.input';

@Module({
  providers: [ProductCommentResolver, ProductCommentService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductComment])],
      resolvers: [
        {
          EntityClass: ProductComment,
          DTOClass: ProductCommentGraphQL,
          CreateDTOClass: CreateProductCommentInput,
        },
      ],
    }),
  ],
})
export class ProductCommentModule {}
