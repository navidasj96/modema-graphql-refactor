import { Module } from '@nestjs/common';
import { InvoiceProductItemService } from './invoice-product-item.service';
import { InvoiceProductItemResolver } from './invoice-product-item.resolver';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { InvoiceProductItem as InvoiceProductItemGraphQL } from '@/modules/invoice-product-item/domain/invoice-product-item';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceProductItemInput } from '@/modules/invoice-product-item/dto/create-invoice-product-item.input';

@Module({
  providers: [InvoiceProductItemResolver, InvoiceProductItemService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceProductItem])],
      resolvers: [
        {
          EntityClass: InvoiceProductItem,
          DTOClass: InvoiceProductItemGraphQL,
          CreateDTOClass: CreateInvoiceProductItemInput,
        },
      ],
    }),
  ],
})
export class InvoiceProductItemModule {}
