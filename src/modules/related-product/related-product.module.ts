import { Module } from '@nestjs/common';
import { RelatedProductService } from './related-product.service';
import { RelatedProductResolver } from './related-product.resolver';
import { RelatedProduct } from '@/modules/related-product/entities/related-product.entity';
import { RelatedProduct as RelatedProductGraphQL } from '@/modules/related-product/domain/related-product';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateRelatedProductInput } from '@/modules/related-product/dto/create-related-product.input';

@Module({
  providers: [RelatedProductResolver, RelatedProductService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([RelatedProduct])],
      resolvers: [
        {
          EntityClass: RelatedProduct,
          DTOClass: RelatedProductGraphQL,
          CreateDTOClass: CreateRelatedProductInput,
        },
      ],
    }),
  ],
})
export class RelatedProductModule {}
