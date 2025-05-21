import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { Invoice as InvoiceGraphQL } from '@/modules/invoice/domain/invoice';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceInput } from '@/modules/invoice/dto/create-invoice.input';
import { CheckSimilarInvoiceWithNameProvider } from '@/modules/invoice/providers/check-similar-invoice-with-name.provider';
import { SetInvoiceAsDepotForDigikalaProvider } from '@/modules/invoice/providers/set-invoice-as-depot-for-digikala';
import { AuthModule } from '../auth/auth.module';
import { ChangeInvoiceStatusProvider } from '@/modules/invoice/providers/change-invoices-status.provider';
import { SettingModule } from '@/modules/setting/setting.module';
import { InvoiceProductItemModule } from '@/modules/invoice-product-item/invoice-product-item.module';

@Module({
  providers: [
    InvoiceResolver,
    InvoiceService,
    CheckSimilarInvoiceWithNameProvider,
    SetInvoiceAsDepotForDigikalaProvider,
    ChangeInvoiceStatusProvider,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Invoice])],

      resolvers: [
        {
          EntityClass: Invoice,
          DTOClass: InvoiceGraphQL,
          CreateDTOClass: CreateInvoiceInput,
          enableAggregate: true,
        },
      ],
    }),
    AuthModule,
    SettingModule,
    InvoiceProductItemModule,
  ],
})
export class InvoiceModule {}
