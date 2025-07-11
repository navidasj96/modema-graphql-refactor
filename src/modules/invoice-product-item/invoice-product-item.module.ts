import { forwardRef, Module } from '@nestjs/common';
import { InvoiceProductItemService } from './invoice-product-item.service';
import { InvoiceProductItemResolver } from './invoice-product-item.resolver';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { InvoiceProductItem as InvoiceProductItemGraphQL } from '@/modules/invoice-product-item/domain/invoice-product-item';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvoiceProductItemInput } from '@/modules/invoice-product-item/dto/create-invoice-product-item.input';
import { UpdateInvoiceProductItemsProvider } from '@/modules/invoice-product-item/providers/update-invoice-product-items.provider';
import { SettingModule } from '@/modules/setting/setting.module';
import { PrintProfileModule } from '@/modules/print-profile/print-profile.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { InvoiceProductStatusModule } from '@/modules/invoice-product-status/invoice-product-status.module';
import { PermissionsToChangeInvoiceProductItemStatusProvider } from '@/modules/invoice-product-item/providers/permissions-to-change-invoice-product-item-status.provider';
import { ProductionRollModule } from '@/modules/production-roll/production-roll.module';
import { InvoiceProductItemInvoiceProductStatusModule } from '@/modules/invoice-product-item-invoice-product-status/invoice-product-item-invoice-product-status.module';
import { InvoiceModule } from '@/modules/invoice/invoice.module';
import { InvoiceInvoiceStatusModule } from '@/modules/invoice-invoice-status/invoice-invoice-status.module';
import { UpdateInvoiceProductItemsRollIdProvider } from '@/modules/invoice-product-item/providers/update-invoice-product-items-roll-id.provider';
import { DamagedInvoiceItemsControllerProvider } from '@/modules/invoice-product-item/providers/damaged-invoice-items-controller.provider';
import { SubproductModule } from '@/modules/subproduct/subproduct.module';
import { AddressModule } from '@/modules/address/address.module';
import { UserModule } from '@/modules/user/user.module';
import { InvoiceAddressModule } from '@/modules/invoice-address/invoice-address.module';
import { InvoiceProductModule } from '@/modules/invoice-product/invoice-product.module';
import { ProductModule } from '@/modules/product/product.module';
import { DamageReasonModule } from '@/modules/damage-reason/damage-reason.module';
import { BasicCarpetColorModule } from '@/modules/basic-carpet-color/basic-carpet-color.module';
import { InvoiceProductItemsListProvider } from '@/modules/invoice-product-item/providers/invoice-product-items-list.provider';
import { ViewableInvoiceProductItemStatusesForUserProvider } from '@/modules/invoice-product-item/providers/viewable-invoice-product-item-statues-for-user';
import { InvoiceProductItemsRipToPrintListProvider } from '@/modules/invoice-product-item/providers/invoice-product-items-rip-to-print-list.provider';

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
    ProductionRollModule,
    InvoiceProductItemInvoiceProductStatusModule,
    InvoiceInvoiceStatusModule,
    forwardRef(() => InvoiceModule),
    ProductionRollModule,
    SubproductModule,
    ProductModule,
    AddressModule,
    UserModule,
    InvoiceAddressModule,
    InvoiceProductModule,
    DamageReasonModule,
    BasicCarpetColorModule,
  ],
  exports: [InvoiceProductItemService],
})
export class InvoiceProductItemModule {}
