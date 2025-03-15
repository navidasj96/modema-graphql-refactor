import { Module } from '@nestjs/common';
import { InvoicePaymentTypeService } from './invoice-payment-type.service';
import { InvoicePaymentTypeResolver } from './invoice-payment-type.resolver';
import { InvoicePaymentType } from '@/modules/invoice-payment-type/entities/invoice-payment-type.entity';
import { InvoicePaymentType as InvoicePaymentTypeGraphQL } from '@/modules/invoice-payment-type/domain/invoice-payment-type';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoicePaymentTypeInput } from '@/modules/invoice-payment-type/dto/create-invoice-payment-type.input';

@Module({
  providers: [InvoicePaymentTypeResolver, InvoicePaymentTypeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoicePaymentType])],
      resolvers: [
        {
          EntityClass: InvoicePaymentType,
          DTOClass: InvoicePaymentTypeGraphQL,
          CreateDTOClass: CreateInvoicePaymentTypeInput,
        },
      ],
    }),
  ],
})
export class InvoicePaymentTypeModule {}
