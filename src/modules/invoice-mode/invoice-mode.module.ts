import { Module } from '@nestjs/common';
import { InvoiceModeService } from './invoice-mode.service';
import { InvoiceModeResolver } from './invoice-mode.resolver';
import { InvoiceMode } from '@/modules/invoice-mode/entities/invoice-mode.entity';
import { InvoiceMode as InvoiceModeGraphQL } from '@/modules/invoice-mode/domain/invoice-mode';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceModeInput } from '@/modules/invoice-mode/dto/create-invoice-mode.input';

@Module({
  providers: [InvoiceModeResolver, InvoiceModeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceMode])],
      resolvers: [
        {
          EntityClass: InvoiceMode,
          DTOClass: InvoiceModeGraphQL,
          CreateDTOClass: CreateInvoiceModeInput,
        },
      ],
    }),
  ],
})
export class InvoiceModeModule {}
