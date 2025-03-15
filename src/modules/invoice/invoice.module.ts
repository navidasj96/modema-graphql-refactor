import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { Invoice as InvoiceGraphQL } from '@/modules/invoice/domain/invoice';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceInput } from '@/modules/invoice/dto/create-invoice.input';

@Module({
  providers: [InvoiceResolver, InvoiceService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Invoice])],
      resolvers: [
        {
          EntityClass: Invoice,
          DTOClass: InvoiceGraphQL,
          CreateDTOClass: CreateInvoiceInput,
        },
      ],
    }),
  ],
})
export class InvoiceModule {}
