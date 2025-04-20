import { Module } from '@nestjs/common';
import { InvoicePaymentHistoryService } from './invoice-payment-history.service';
import { InvoicePaymentHistoryResolver } from './invoice-payment-history.resolver';
import { InvoicePaymentHistory } from '@/modules/invoice-payment-history/entities/invoice-payment-history.entity';
import { InvoicePaymentHistory as InvoicePaymentHistoryGraphQL } from '@/modules/invoice-payment-history/domain/invoice-payment-history';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoicePaymentHistoryInput } from '@/modules/invoice-payment-history/dto/create-invoice-payment-history.input';

@Module({
  providers: [InvoicePaymentHistoryResolver, InvoicePaymentHistoryService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoicePaymentHistory])],
      resolvers: [
        {
          EntityClass: InvoicePaymentHistory,
          DTOClass: InvoicePaymentHistoryGraphQL,
          CreateDTOClass: CreateInvoicePaymentHistoryInput,
          enableAggregate: true,
        },
      ],
    }),
  ],
  exports: [InvoicePaymentHistoryService],
})
export class InvoicePaymentHistoryModule {}
