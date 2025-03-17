import { Module } from '@nestjs/common';
import { ProductTagService } from './product-tag.service';
import { ProductTagResolver } from './product-tag.resolver';
import { ProductTag } from '@/modules/product-tag/entities/product-tag.entity';
import { ProductTag as ProductTagGraphQL } from '@/modules/product-tag/domain/product-tag';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductTagInput } from '@/modules/product-tag/dto/create-product-tag.input';

@Module({
  providers: [ProductTagResolver, ProductTagService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductTag])],
      resolvers: [
        {
          EntityClass: ProductTag,
          DTOClass: ProductTagGraphQL,
          CreateDTOClass: CreateProductTagInput,
        },
      ],
    }),
  ],
})
export class ProductTagModule {}
