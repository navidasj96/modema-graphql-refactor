import { Module } from '@nestjs/common';
import { InvoiceProductHistoryService } from './invoice-product-history.service';
import { InvoiceProductHistoryResolver } from './invoice-product-history.resolver';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/entities/invoice-product-history.entity';
import { InvoiceProductHistory as InvoiceProductHistoryGraphQL } from '@/modules/invoice-product-history/domain/invoice-product-history';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceProductHistoryInput } from '@/modules/invoice-product-history/dto/create-invoice-product-history.input';

@Module({
  providers: [InvoiceProductHistoryResolver, InvoiceProductHistoryService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceProductHistory])],
      resolvers: [
        {
          EntityClass: InvoiceProductHistory,
          DTOClass: InvoiceProductHistoryGraphQL,
          CreateDTOClass: CreateInvoiceProductHistoryInput,
        },
      ],
    }),
  ],
  exports: [InvoiceProductHistoryService],
})
export class InvoiceProductHistoryModule {}
