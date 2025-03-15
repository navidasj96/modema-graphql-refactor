import { Module } from '@nestjs/common';
import { InvoiceProductItemInvoiceProductStatusService } from './invoice-product-item-invoice-product-status.service';
import { InvoiceProductItemInvoiceProductStatusResolver } from './invoice-product-item-invoice-product-status.resolver';
import { InvoiceProductItemInvoiceProductStatus } from '@/modules/invoice-product-item-invoice-product-status/entities/invoice-product-item-invoice-product-status.entity';
import { InvoiceProductItemInvoiceProductStatus as InvoiceProductItemInvoiceProductStatusGraphQL } from '@/modules/invoice-product-item-invoice-product-status/domain/invoice-product-item-invoice-product-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceProductItemInvoiceProductStatusInput } from '@/modules/invoice-product-item-invoice-product-status/dto/create-invoice-product-item-invoice-product-status.input';

@Module({
  providers: [
    InvoiceProductItemInvoiceProductStatusResolver,
    InvoiceProductItemInvoiceProductStatusService,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([
          InvoiceProductItemInvoiceProductStatus,
        ]),
      ],
      resolvers: [
        {
          EntityClass: InvoiceProductItemInvoiceProductStatus,
          DTOClass: InvoiceProductItemInvoiceProductStatusGraphQL,
          CreateDTOClass: CreateInvoiceProductItemInvoiceProductStatusInput,
        },
      ],
    }),
  ],
})
export class InvoiceProductItemInvoiceProductStatusModule {}
