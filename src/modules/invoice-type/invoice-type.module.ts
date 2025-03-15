import { Module } from '@nestjs/common';
import { InvoiceTypeService } from './invoice-type.service';
import { InvoiceTypeResolver } from './invoice-type.resolver';
import { InvoiceType } from '@/modules/invoice-type/entities/invoice-type.entity';
import { InvoiceType as InvoiceTypeGraphQL } from '@/modules/invoice-type/domain/invoice-type';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceTypeInput } from '@/modules/invoice-type/dto/create-invoice-type.input';

@Module({
  providers: [InvoiceTypeResolver, InvoiceTypeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceType])],
      resolvers: [
        {
          EntityClass: InvoiceType,
          DTOClass: InvoiceTypeGraphQL,
          CreateDTOClass: CreateInvoiceTypeInput,
        },
      ],
    }),
  ],
})
export class InvoiceTypeModule {}
