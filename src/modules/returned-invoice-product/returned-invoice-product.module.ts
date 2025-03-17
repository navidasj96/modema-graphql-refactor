import { Module } from '@nestjs/common';
import { ReturnedInvoiceProductService } from './returned-invoice-product.service';
import { ReturnedInvoiceProductResolver } from './returned-invoice-product.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnedInvoiceProduct } from '@/modules/returned-invoice-product/entities/returned-invoice-product.entity';
import { ReturnedInvoiceProduct as ReturnedInvoiceProductGraphQL } from '@/modules/returned-invoice-product/domain/returned-invoice-product';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnedInvoiceProductInput } from '@/modules/returned-invoice-product/dto/create-returned-invoice-product.input';

@Module({
  providers: [ReturnedInvoiceProductResolver, ReturnedInvoiceProductService],
  imports: [
    TypeOrmModule.forFeature([ReturnedInvoiceProduct]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReturnedInvoiceProduct])],
      resolvers: [
        {
          EntityClass: ReturnedInvoiceProduct,
          DTOClass: ReturnedInvoiceProductGraphQL,
          CreateDTOClass: CreateReturnedInvoiceProductInput,
        },
      ],
    }),
  ],
})
export class ReturnedInvoiceProductModule {}
