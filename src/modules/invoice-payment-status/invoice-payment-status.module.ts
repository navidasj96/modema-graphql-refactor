import { Module } from '@nestjs/common';
import { InvoicePaymentStatusService } from './invoice-payment-status.service';
import { InvoicePaymentStatusResolver } from './invoice-payment-status.resolver';
import { InvoicePaymentStatus } from '@/modules/invoice-payment-status/entities/invoice-payment-status.entity';
import { InvoicePaymentStatus as InvoicePaymentStatusGraphQL } from '@/modules/invoice-payment-status/domain/invoice-payment-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoicePaymentStatusInput } from '@/modules/invoice-payment-status/dto/create-invoice-payment-status.input';

@Module({
  providers: [InvoicePaymentStatusResolver, InvoicePaymentStatusService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoicePaymentStatus])],
      resolvers: [
        {
          EntityClass: InvoicePaymentStatus,
          DTOClass: InvoicePaymentStatusGraphQL,
          CreateDTOClass: CreateInvoicePaymentStatusInput,
        },
      ],
    }),
  ],
})
export class InvoicePaymentStatusModule {}
