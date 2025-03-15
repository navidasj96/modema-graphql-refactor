import { Module } from '@nestjs/common';
import { InvoiceReversalService } from './invoice-reversal.service';
import { InvoiceReversalResolver } from './invoice-reversal.resolver';
import { InvoiceReversal } from '@/modules/invoice-reversal/entities/invoice-reversal.entity';
import { InvoiceReversal as InvoiceReversalGraphQL } from '@/modules/invoice-reversal/domain/invoice-reversal';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceReversalInput } from '@/modules/invoice-reversal/dto/create-invoice-reversal.input';

@Module({
  providers: [InvoiceReversalResolver, InvoiceReversalService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceReversal])],
      resolvers: [
        {
          EntityClass: InvoiceReversal,
          DTOClass: InvoiceReversalGraphQL,
          CreateDTOClass: CreateInvoiceReversalInput,
        },
      ],
    }),
  ],
})
export class InvoiceReversalModule {}
