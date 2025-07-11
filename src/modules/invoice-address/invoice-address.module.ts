import { Module } from '@nestjs/common';
import { InvoiceAddressService } from './invoice-address.service';
import { InvoiceAddressResolver } from './invoice-address.resolver';
import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';
import { InvoiceAddress as InvoiceAddressGraphQL } from '@/modules/invoice-address/domain/invoice-address';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceAddressInput } from '@/modules/invoice-address/dto/create-invoice-address.input';
import { InvoiceAddressPrepareProvider } from '@/modules/invoice-address/providers/invoice-address-prepare.provider';

@Module({
  providers: [
    InvoiceAddressResolver,
    InvoiceAddressService,
    InvoiceAddressPrepareProvider,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceAddress])],
      resolvers: [
        {
          EntityClass: InvoiceAddress,
          DTOClass: InvoiceAddressGraphQL,
          CreateDTOClass: CreateInvoiceAddressInput,
        },
      ],
    }),
  ],
  exports: [InvoiceAddressService],
})
export class InvoiceAddressModule {}
