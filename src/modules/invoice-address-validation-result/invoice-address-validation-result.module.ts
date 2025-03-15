import { Module } from '@nestjs/common';
import { InvoiceAddressValidationResultService } from './invoice-address-validation-result.service';
import { InvoiceAddressValidationResultResolver } from './invoice-address-validation-result.resolver';
import { InvoiceAddressValidationResult } from '@/modules/invoice-address-validation-result/entities/invoice-address-validation-result.entity';
import { InvoiceAddressValidationResult as InvoiceAddressValidationResultGraphQL } from '@/modules/invoice-address-validation-result/domain/invoice-address-validation-result';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceAddressValidationResultInput } from '@/modules/invoice-address-validation-result/dto/create-invoice-address-validation-result.input';

@Module({
  providers: [
    InvoiceAddressValidationResultResolver,
    InvoiceAddressValidationResultService,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([InvoiceAddressValidationResult]),
      ],
      resolvers: [
        {
          EntityClass: InvoiceAddressValidationResult,
          DTOClass: InvoiceAddressValidationResultGraphQL,
          CreateDTOClass: CreateInvoiceAddressValidationResultInput,
        },
      ],
    }),
  ],
})
export class InvoiceAddressValidationResultModule {}
