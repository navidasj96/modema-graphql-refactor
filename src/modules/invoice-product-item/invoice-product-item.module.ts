import { AddressModule } from '@/modules/address/address.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { BasicCarpetColorModule } from '@/modules/basic-carpet-color/basic-carpet-color.module';
import { DamageReasonModule } from '@/modules/damage-reason/damage-reason.module';
import { InvoiceAddressModule } from '@/modules/invoice-address/invoice-address.module';
import { InvoiceInvoiceStatusModule } from '@/modules/invoice-invoice-status/invoice-invoice-status.module';
import { InvoiceProductItemInvoiceProductStatusModule } from '@/modules/invoice-product-item-invoice-product-status/invoice-product-item-invoice-product-status.module';
import { InvoiceProductItem as InvoiceProductItemGraphQL } from '@/modules/invoice-product-item/domain/invoice-product-item';
import { CreateInvoiceProductItemInput } from '@/modules/invoice-product-item/dto/create-invoice-product-item.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { CancelDepotInvoiceItemProvider } from '@/modules/invoice-product-item/providers/cancel-depot-invoice-item.provider';
import { CreateNewInvoiceItemForDepotProvider } from '@/modules/invoice-product-item/providers/create-new-invoice-item-for-depot.provider';
import { DamagedInvoiceItemsControllerProvider } from '@/modules/invoice-product-item/providers/damaged-invoice-items-controller.provider';
import { InvoiceItemReplaceProvider } from '@/modules/invoice-product-item/providers/invoice-item-replace.provider';
import { InvoiceItemsPrintToHeatProvider } from '@/modules/invoice-product-item/providers/invoice-items-print-to-heat.provider';
import { InvoiceProductItemsListProvider } from '@/modules/invoice-product-item/providers/invoice-product-items-list.provider';
import { InvoiceProductItemsRipToPrintListProvider } from '@/modules/invoice-product-item/providers/invoice-product-items-rip-to-print-list.provider';
import { PermissionsToChangeInvoiceProductItemStatusProvider } from '@/modules/invoice-product-item/providers/permissions-to-change-invoice-product-item-status.provider';
import { PrintItemTagProvider } from '@/modules/invoice-product-item/providers/print-item-tag.provider';
import { RollsReportProductionProvider } from '@/modules/invoice-product-item/providers/rolls-report-production.provider';
import { RollsReportProvider } from '@/modules/invoice-product-item/providers/rolls-report.provider';
import { UpdateInvoiceProductItemRipToPrintProvider } from '@/modules/invoice-product-item/providers/update-invoice-product-item-rip-to-print.provider';
import { UpdateInvoiceProductItemsRollIdProvider } from '@/modules/invoice-product-item/providers/update-invoice-product-items-roll-id.provider';
import { UpdateInvoiceProductItemsProvider } from '@/modules/invoice-product-item/providers/update-invoice-product-items.provider';
import { ViewableInvoiceProductItemStatusesForUserProvider } from '@/modules/invoice-product-item/providers/viewable-invoice-product-item-statues-for-user';
import { InvoiceProductStatusModule } from '@/modules/invoice-product-status/invoice-product-status.module';
import { InvoiceProductModule } from '@/modules/invoice-product/invoice-product.module';
import { InvoiceModule } from '@/modules/invoice/invoice.module';
import { PrintProfileModule } from '@/modules/print-profile/print-profile.module';
import { PrintRipModule } from '@/modules/print-rip/print-rip.module';
import { ProductModule } from '@/modules/product/product.module';
import { ProductionRollModule } from '@/modules/production-roll/production-roll.module';
import { SettingModule } from '@/modules/setting/setting.module';
import { SubproductModule } from '@/modules/subproduct/subproduct.module';
import { UserModule } from '@/modules/user/user.module';
import { forwardRef, Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { InvoiceProductItemResolver } from './invoice-product-item.resolver';
import { InvoiceProductItemService } from './invoice-product-item.service';

@Module({
  providers: [
    InvoiceProductItemResolver,
    InvoiceProductItemService,
    UpdateInvoiceProductItemsProvider,
    PermissionsToChangeInvoiceProductItemStatusProvider,
    UpdateInvoiceProductItemsRollIdProvider,
    DamagedInvoiceItemsControllerProvider,
    InvoiceProductItemsListProvider,
    ViewableInvoiceProductItemStatusesForUserProvider,
    InvoiceProductItemsRipToPrintListProvider,
    UpdateInvoiceProductItemRipToPrintProvider,
    CancelDepotInvoiceItemProvider,
    CreateNewInvoiceItemForDepotProvider,
    InvoiceItemReplaceProvider,
    InvoiceItemsPrintToHeatProvider,
    PrintItemTagProvider,
    RollsReportProvider,
    RollsReportProductionProvider,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvoiceProductItem])],
      resolvers: [
        {
          EntityClass: InvoiceProductItem,
          DTOClass: InvoiceProductItemGraphQL,
          CreateDTOClass: CreateInvoiceProductItemInput,
        },
      ],
    }),
    SettingModule,
    PrintProfileModule,
    AuthModule,
    InvoiceProductStatusModule,
    forwardRef(() => ProductionRollModule),
    InvoiceProductItemInvoiceProductStatusModule,
    InvoiceInvoiceStatusModule,
    forwardRef(() => InvoiceModule),
    SubproductModule,
    ProductModule,
    AddressModule,
    UserModule,
    InvoiceAddressModule,
    InvoiceProductModule,
    DamageReasonModule,
    BasicCarpetColorModule,
    PrintRipModule,
  ],
  exports: [InvoiceProductItemService],
})
export class InvoiceProductItemModule {}
