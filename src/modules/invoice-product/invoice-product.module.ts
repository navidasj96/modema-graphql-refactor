import { forwardRef, Module } from '@nestjs/common';
import { InvoiceProductService } from './invoice-product.service';
import { InvoiceProductResolver } from './invoice-product.resolver';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { InvoiceProduct as InvoiceProductGraphQL } from '@/modules/invoice-product/domain/invoice-product';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceProductInput } from '@/modules/invoice-product/dto/create-invoice-product.input';
import { ReadyInvoiceProductProvider } from '@/modules/invoice-product/providers/ready-invoice-items.provider';
import { InvoiceModule } from '@/modules/invoice/invoice.module';

@Module({
  providers: [
    InvoiceProductResolver,
    InvoiceProductService,
    ReadyInvoiceProductProvider,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceProduct])],
      resolvers: [
        {
          EntityClass: InvoiceProduct,
          DTOClass: InvoiceProductGraphQL,
          CreateDTOClass: CreateInvoiceProductInput,
        },
      ],
    }),
    forwardRef(() => InvoiceModule),
  ],
  exports: [InvoiceProductService],
})
export class InvoiceProductModule {}
