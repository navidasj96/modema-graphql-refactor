import { Module } from '@nestjs/common';
import { InvoiceInvoiceStatusService } from './invoice-invoice-status.service';
import { InvoiceInvoiceStatusResolver } from './invoice-invoice-status.resolver';
import { InvoiceInvoiceStatus } from '@/modules/invoice-invoice-status/entities/invoice-invoice-status.entity';
import { InvoiceInvoiceStatus as InvoiceInvoiceStatusGraphQL } from '@/modules/invoice-invoice-status/domain/invoice-invoice-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceInvoiceStatusInput } from '@/modules/invoice-invoice-status/dto/create-invoice-invoice-status.input';

@Module({
  providers: [InvoiceInvoiceStatusResolver, InvoiceInvoiceStatusService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceInvoiceStatus])],
      resolvers: [
        {
          EntityClass: InvoiceInvoiceStatus,
          DTOClass: InvoiceInvoiceStatusGraphQL,
          CreateDTOClass: CreateInvoiceInvoiceStatusInput,
        },
      ],
    }),
  ],
})
export class InvoiceInvoiceStatusModule {}
