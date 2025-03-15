import { Module } from '@nestjs/common';
import { InvoiceHistoryService } from './invoice-history.service';
import { InvoiceHistoryResolver } from './invoice-history.resolver';
import { InvoiceHistory } from '@/modules/invoice-history/entities/invoice-history.entity';
import { InvoiceHistory as InvoiceHistoryGraphQL } from '@/modules/invoice-history/domain/invoice-history';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceHistoryInput } from '@/modules/invoice-history/dto/create-invoice-history.input';

@Module({
  providers: [InvoiceHistoryResolver, InvoiceHistoryService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceHistory])],
      resolvers: [
        {
          EntityClass: InvoiceHistory,
          DTOClass: InvoiceHistoryGraphQL,
          CreateDTOClass: CreateInvoiceHistoryInput,
        },
      ],
    }),
  ],
})
export class InvoiceHistoryModule {}
