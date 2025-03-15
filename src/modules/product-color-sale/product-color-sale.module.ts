import { Module } from '@nestjs/common';
import { ProductColorSaleService } from './product-color-sale.service';
import { ProductColorSaleResolver } from './product-color-sale.resolver';
import { ProductColorSale } from '@/modules/product-color-sale/entities/product-color-sale.entity';
import { ProductColorSale as ProductColorSaleGraphQL } from '@/modules/product-color-sale/domain/product-color-sale';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductColorSaleInput } from '@/modules/product-color-sale/dto/create-product-color-sale.input';

@Module({
  providers: [ProductColorSaleResolver, ProductColorSaleService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductColorSale])],
      resolvers: [
        {
          EntityClass: ProductColorSale,
          DTOClass: ProductColorSaleGraphQL,
          CreateDTOClass: CreateProductColorSaleInput,
        },
      ],
    }),
  ],
})
export class ProductColorSaleModule {}
