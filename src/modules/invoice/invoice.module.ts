import { forwardRef, Module } from '@nestjs/common';
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
import { InvoiceProductItemInvoiceProductStatusModule } from '@/modules/invoice-product-item-invoice-product-status/invoice-product-item-invoice-product-status.module';
import { ShippingServiceModule } from '@/modules/shipping-service/shipping-service.module';
import { FillInvoicePackageCountIfEmptyProvider } from '@/modules/invoice/providers/fill-invoice-package-count-if-empty.provider';
import { VisitorModule } from '@/modules/visitor/visitor.module';
import { QueueModule } from '@/modules/queue/queue.module';
import { InvoiceProductModule } from '@/modules/invoice-product/invoice-product.module';
import { InvoiceInvoiceStatusModule } from '@/modules/invoice-invoice-status/invoice-invoice-status.module';
import { InvoiceHistoryModule } from '@/modules/invoice-history/invoice-history.module';
import { UserModule } from '@/modules/user/user.module';
import { ShowInvoiceProvider } from '@/modules/invoice/providers/show-invoice-provider';
import { InvoiceStatusModule } from '@/modules/invoice-status/invoice-status.module';
import { InvoicePrepareProvider } from '@/modules/invoice/providers/invoice-prepare.provider';
import { WalletModule } from '@/modules/wallet/wallet.module';
import { InvoiceAddressModule } from '@/modules/invoice-address/invoice-address.module';
import { InvoiceProductStatusModule } from '@/modules/invoice-product-status/invoice-product-status.module';
import { SubproductsDepotInProgressProvider } from '@/modules/invoice/providers/subproducts-depot-in-progress.provider';
import { GetNewInvoiceNumberProvider } from '@/modules/invoice/providers/get-new-invoice-number.provider';

@Module({
  providers: [
    InvoiceResolver,
    InvoiceService,
    CheckSimilarInvoiceWithNameProvider,
    SetInvoiceAsDepotForDigikalaProvider,
    ChangeInvoiceStatusProvider,
    FillInvoicePackageCountIfEmptyProvider,
    ShowInvoiceProvider,
    InvoicePrepareProvider,
    SubproductsDepotInProgressProvider,
    GetNewInvoiceNumberProvider,
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
    InvoiceProductItemInvoiceProductStatusModule,
    VisitorModule,
    QueueModule,
    InvoiceProductModule,
    InvoiceInvoiceStatusModule,
    InvoiceHistoryModule,
    UserModule,
    InvoiceStatusModule,
    WalletModule,
    InvoiceAddressModule,
    InvoiceProductStatusModule,
    forwardRef(() => ShippingServiceModule),
    forwardRef(() => InvoiceProductItemModule),
  ],
  exports: [InvoiceService],
})
export class InvoiceModule {}
