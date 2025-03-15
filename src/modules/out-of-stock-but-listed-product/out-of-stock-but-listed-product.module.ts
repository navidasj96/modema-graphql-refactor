import { Module } from '@nestjs/common';
import { OutOfStockButListedProductService } from './out-of-stock-but-listed-product.service';
import { OutOfStockButListedProductResolver } from './out-of-stock-but-listed-product.resolver';
import { OutOfStockButListedProduct } from '@/modules/out-of-stock-but-listed-product/entities/out-of-stock-but-listed-product.entity';
import { OutOfStockButListedProduct as OutOfStockButListedProductGraphQL } from '@/modules/out-of-stock-but-listed-product/domain/out-of-stock-but-listed-product';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateOutOfStockButListedProductInput } from '@/modules/out-of-stock-but-listed-product/dto/create-out-of-stock-but-listed-product.input';

@Module({
  providers: [
    OutOfStockButListedProductResolver,
    OutOfStockButListedProductService,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([OutOfStockButListedProduct]),
      ],
      resolvers: [
        {
          EntityClass: OutOfStockButListedProduct,
          DTOClass: OutOfStockButListedProductGraphQL,
          CreateDTOClass: CreateOutOfStockButListedProductInput,
        },
      ],
    }),
  ],
})
export class OutOfStockButListedProductModule {}
