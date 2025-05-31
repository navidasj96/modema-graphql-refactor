import { Module } from '@nestjs/common';
import { InvoiceStatusService } from './invoice-status.service';
import { InvoiceStatusResolver } from './invoice-status.resolver';
import { InvoiceStatus } from '@/modules/invoice-status/entities/invoice-status.entity';
import { InvoiceStatus as InvoiceStatusGraphQL } from '@/modules/invoice-status/domain/invoice-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceStatusInput } from '@/modules/invoice-status/dto/create-invoice-status.input';
import { InvoiceStatusPrepareProvider } from '@/modules/invoice-status/providers/invoice-status-prepare.provider';

@Module({
  providers: [
    InvoiceStatusResolver,
    InvoiceStatusService,
    InvoiceStatusPrepareProvider,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceStatus])],
      resolvers: [
        {
          EntityClass: InvoiceStatus,
          DTOClass: InvoiceStatusGraphQL,
          CreateDTOClass: CreateInvoiceStatusInput,
        },
      ],
    }),
  ],
  exports: [InvoiceStatusService],
})
export class InvoiceStatusModule {}
