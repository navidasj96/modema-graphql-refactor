import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CarpetUsagePlaceInvoiceProduct } from './entities/carpet-usage-place-invoice-product.entity';
import { CarpetUsagePlaceInvoiceProduct as CarpetUsagePlaceInvoiceProductGraphQL } from './domain/carpet-usage-place-invoice-product';
import { CreateCarpetUsagePlaceInvoiceProductInput } from './dto/create-carpet-usage-place-invoice-product.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([CarpetUsagePlaceInvoiceProduct]),
      ],
      resolvers: [
        {
          EntityClass: CarpetUsagePlaceInvoiceProduct,
          DTOClass: CarpetUsagePlaceInvoiceProductGraphQL,
          CreateDTOClass: CreateCarpetUsagePlaceInvoiceProductInput,
        },
      ],
    }),
  ],
})
export class CarpetUsagePlaceInvoiceProductModule {}
