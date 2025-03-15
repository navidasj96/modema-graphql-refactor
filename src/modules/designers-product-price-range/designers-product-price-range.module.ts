import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { DesignersProductPriceRange } from './entities/designers-product-price-range.entity';
import { DesignersProductPriceRange as DesignersProductPriceRangeGraphQL } from './domain/designers-product-price-range';
import { CreateDesignersProductPriceRangeInput } from './dto/create-designers-product-price-range.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([DesignersProductPriceRange]),
      ],
      resolvers: [
        {
          EntityClass: DesignersProductPriceRange,
          DTOClass: DesignersProductPriceRangeGraphQL,
          CreateDTOClass: CreateDesignersProductPriceRangeInput,
        },
      ],
    }),
  ],
})
export class DesignersProductPriceRangeModule {}
