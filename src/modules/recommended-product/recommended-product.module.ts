import { Module } from '@nestjs/common';
import { RecommendedProductService } from './recommended-product.service';
import { RecommendedProductResolver } from './recommended-product.resolver';
import { RecommendedProduct } from '@/modules/recommended-product/entities/recommended-product.entity';
import { RecommendedProduct as RecommendedProductGraphQL } from '@/modules/recommended-product/domain/recommended-product';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateRecommendedProductInput } from '@/modules/recommended-product/dto/create-recommended-product.input';

@Module({
  providers: [RecommendedProductResolver, RecommendedProductService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([RecommendedProduct])],
      resolvers: [
        {
          EntityClass: RecommendedProduct,
          DTOClass: RecommendedProductGraphQL,
          CreateDTOClass: CreateRecommendedProductInput,
        },
      ],
    }),
  ],
})
export class RecommendedProductModule {}
