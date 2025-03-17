import { Module } from '@nestjs/common';
import { ReturnedInvoiceService } from './returned-invoice.service';
import { ReturnedInvoiceResolver } from './returned-invoice.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnedInvoice } from '@/modules/returned-invoice/entities/returned-invoice.entity';
import { ReturnedInvoice as ReturnedInvoiceGraphQL } from '@/modules/returned-invoice/domain/returned-invoice';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnedInvoiceInput } from '@/modules/returned-invoice/dto/create-returned-invoice.input';

@Module({
  providers: [ReturnedInvoiceResolver, ReturnedInvoiceService],
  imports: [
    TypeOrmModule.forFeature([ReturnedInvoice]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReturnedInvoice])],
      resolvers: [
        {
          EntityClass: ReturnedInvoice,
          DTOClass: ReturnedInvoiceGraphQL,
          CreateDTOClass: CreateReturnedInvoiceInput,
        },
      ],
    }),
  ],
})
export class ReturnedInvoiceModule {}
