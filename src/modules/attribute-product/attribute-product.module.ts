import { Module } from '@nestjs/common';
import { AttributeProductService } from './attribute-product.service';
import { AttributeProductResolver } from './attribute-product.resolver';
import { AttributeProduct } from './entities/attribute-product.entity';
import { AttributeProduct as AttributeProductGraphQL } from './domain/attribute-product';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateAttributeProductInput } from '@/modules/attribute-product/dto/create-attribute-product.input';

@Module({
  providers: [AttributeProductResolver, AttributeProductService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AttributeProduct])],
      resolvers: [
        {
          EntityClass: AttributeProduct,
          DTOClass: AttributeProductGraphQL,
          CreateDTOClass: CreateAttributeProductInput,
        },
      ],
    }),
  ],
})
export class AttributeProductModule {}
