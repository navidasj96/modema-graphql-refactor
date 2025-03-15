import { Module } from '@nestjs/common';
import { InvoiceReversalItemService } from './invoice-reversal-item.service';
import { InvoiceReversalItemResolver } from './invoice-reversal-item.resolver';
import { InvoiceReversalItem } from '@/modules/invoice-reversal-item/entities/invoice-reversal-item.entity';
import { InvoiceReversalItem as InvoiceReversalItemGraphQL } from '@/modules/invoice-reversal-item/domain/invoice-reversal-item';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceReversalItemInput } from '@/modules/invoice-reversal-item/dto/create-invoice-reversal-item.input';

@Module({
  providers: [InvoiceReversalItemResolver, InvoiceReversalItemService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceReversalItem])],
      resolvers: [
        {
          EntityClass: InvoiceReversalItem,
          DTOClass: InvoiceReversalItemGraphQL,
          CreateDTOClass: CreateInvoiceReversalItemInput,
        },
      ],
    }),
  ],
})
export class InvoiceReversalItemModule {}
