import { Module } from '@nestjs/common';
import { InvoiceProductStatusService } from './invoice-product-status.service';
import { InvoiceProductStatusResolver } from './invoice-product-status.resolver';
import { InvoiceProductStatus } from '@/modules/invoice-product-status/entities/invoice-product-status.entity';
import { InvoiceProductStatus as InvoiceProductStatusGraphQL } from '@/modules/invoice-product-status/domain/invoice-product-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceProductStatusInput } from '@/modules/invoice-product-status/dto/create-invoice-product-status.input';

@Module({
  providers: [InvoiceProductStatusResolver, InvoiceProductStatusService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceProductStatus])],
      resolvers: [
        {
          EntityClass: InvoiceProductStatus,
          DTOClass: InvoiceProductStatusGraphQL,
          CreateDTOClass: CreateInvoiceProductStatusInput,
        },
      ],
    }),
  ],
  exports: [InvoiceProductStatusService],
})
export class InvoiceProductStatusModule {}
