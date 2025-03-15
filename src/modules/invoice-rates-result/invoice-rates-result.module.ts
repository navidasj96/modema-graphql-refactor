import { Module } from '@nestjs/common';
import { InvoiceRatesResultService } from './invoice-rates-result.service';
import { InvoiceRatesResultResolver } from './invoice-rates-result.resolver';
import { InvoiceRatesResult } from '@/modules/invoice-rates-result/entities/invoice-rates-result.entity';
import { InvoiceRatesResult as InvoiceRatesResultGraphQL } from '@/modules/invoice-rates-result/domain/invoice-rates-result';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceRatesResultInput } from '@/modules/invoice-rates-result/dto/create-invoice-rates-result.input';

@Module({
  providers: [InvoiceRatesResultResolver, InvoiceRatesResultService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceRatesResult])],
      resolvers: [
        {
          EntityClass: InvoiceRatesResult,
          DTOClass: InvoiceRatesResultGraphQL,
          CreateDTOClass: CreateInvoiceRatesResultInput,
        },
      ],
    }),
  ],
})
export class InvoiceRatesResultModule {}
