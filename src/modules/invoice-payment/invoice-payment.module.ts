import { Module } from '@nestjs/common';
import { InvoicePaymentService } from './invoice-payment.service';
import { InvoicePaymentResolver } from './invoice-payment.resolver';
import { InvoicePayment } from '@/modules/invoice-payment/entities/invoice-payment.entity';
import { InvoicePayment as InvoicePaymentGraphQL } from '@/modules/invoice-payment/domain/invoice-payment';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoicePaymentInput } from '@/modules/invoice-payment/dto/create-invoice-payment.input';

@Module({
  providers: [InvoicePaymentResolver, InvoicePaymentService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoicePayment])],
      resolvers: [
        {
          EntityClass: InvoicePayment,
          DTOClass: InvoicePaymentGraphQL,
          CreateDTOClass: CreateInvoicePaymentInput,
          enableAggregate: true,
        },
      ],
    }),
  ],
})
export class InvoicePaymentModule {}
