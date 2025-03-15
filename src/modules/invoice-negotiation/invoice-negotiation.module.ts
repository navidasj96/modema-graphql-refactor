import { Module } from '@nestjs/common';
import { InvoiceNegotiationService } from './invoice-negotiation.service';
import { InvoiceNegotiationResolver } from './invoice-negotiation.resolver';
import { InvoiceNegotiation } from '@/modules/invoice-negotiation/entities/invoice-negotiation.entity';
import { InvoiceNegotiation as InvoiceNegotiationGraphQL } from '@/modules/invoice-negotiation/domain/invoice-negotiation';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceNegotiationInput } from '@/modules/invoice-negotiation/dto/create-invoice-negotiation.input';

@Module({
  providers: [InvoiceNegotiationResolver, InvoiceNegotiationService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceNegotiation])],
      resolvers: [
        {
          EntityClass: InvoiceNegotiation,
          DTOClass: InvoiceNegotiationGraphQL,
          CreateDTOClass: CreateInvoiceNegotiationInput,
        },
      ],
    }),
  ],
})
export class InvoiceNegotiationModule {}
