import { Module } from '@nestjs/common';
import { InvoiceShippingRateService } from './invoice-shipping-rate.service';
import { InvoiceShippingRateResolver } from './invoice-shipping-rate.resolver';
import { InvoiceShippingRate } from '@/modules/invoice-shipping-rate/entities/invoice-shipping-rate.entity';
import { InvoiceShippingRate as InvoiceShippingRateGraphQL } from '@/modules/invoice-shipping-rate/domain/invoice-shipping-rate';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceShippingRateInput } from '@/modules/invoice-shipping-rate/dto/create-invoice-shipping-rate.input';

@Module({
  providers: [InvoiceShippingRateResolver, InvoiceShippingRateService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceShippingRate])],
      resolvers: [
        {
          EntityClass: InvoiceShippingRate,
          DTOClass: InvoiceShippingRateGraphQL,
          CreateDTOClass: CreateInvoiceShippingRateInput,
        },
      ],
    }),
  ],
})
export class InvoiceShippingRateModule {}
