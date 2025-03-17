import { Module } from '@nestjs/common';
import { ProductRateService } from './product-rate.service';
import { ProductRateResolver } from './product-rate.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRate } from '@/modules/product-rate/entities/product-rate.entity';
import { ProductRate as ProductRateGraphQL } from '@/modules/product-rate/domain/product-rate';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductRateInput } from '@/modules/product-rate/dto/create-product-rate.input';

@Module({
  providers: [ProductRateResolver, ProductRateService],
  imports: [
    TypeOrmModule.forFeature([ProductRate]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductRate])],
      resolvers: [
        {
          EntityClass: ProductRate,
          DTOClass: ProductRateGraphQL,
          CreateDTOClass: CreateProductRateInput,
        },
      ],
    }),
  ],
})
export class ProductRateModule {}
