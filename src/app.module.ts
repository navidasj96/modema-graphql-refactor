/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import databaseConfig from '@/configuration/database.config';
import generalConfig from '@/configuration/general-config';
import { ImageLayerModule } from '@/modules/image-layer/image-layer.module';
import { UserModule } from '@/modules/user/user.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import {
  ConfigModule as ConfigModuleNest,
  ConfigService as ConfigServiceNest,
} from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from './modules/activity/activity.module';
import { AddressModule } from './modules/address/address.module';
import { AttributeAttributeGroupModule } from './modules/attribute-attribute-group/attribute-attribute-group.module';
import { AttributeGroupModule } from './modules/attribute-group/attribute-group.module';
import { AttributeItemModule } from './modules/attribute-item/attribute-item.module';
import { AttributeProductModule } from './modules/attribute-product/attribute-product.module';
import { AttributeSubproductModule } from './modules/attribute-subproduct/attribute-subproduct.module';
import { AttributeModule } from './modules/attribute/attribute.module';
import { AutomationEventModule } from './modules/automation-event/automation-event.module';
import { AutomationRfmScoreModule } from './modules/automation-rfm-score/automation-rfm-score.module';
import { BasicCarpetBorderModule } from './modules/basic-carpet-border/basic-carpet-border.module';
import { BasicCarpetColorModule } from './modules/basic-carpet-color/basic-carpet-color.module';
import { BasicCarpetDesignModule } from './modules/basic-carpet-design/basic-carpet-design.module';
import { BasicCarpetDesignerModule } from './modules/basic-carpet-designer/basic-carpet-designer.module';
import { BasicCarpetMaterialModule } from './modules/basic-carpet-material/basic-carpet-material.module';
import { BasicCarpetSizeDetailModule } from './modules/basic-carpet-size-detail/basic-carpet-size-detail.module';
import { BasicCarpetSizeModule } from './modules/basic-carpet-size/basic-carpet-size.module';
import { BasicCarpetTypeModule } from './modules/basic-carpet-type/basic-carpet-type.module';
import { BorderModule } from './modules/border/border.module';
import { CampaignFreeOfferSizeModule } from './modules/campaign-free-offer-size/campaign-free-offer-size.module';
import { CampaignFreeOfferModule } from './modules/campaign-free-offer/campaign-free-offer.module';
import { CampaignGoldCoinSubModule } from './modules/campaign-gold-coin-sub/campaign-gold-coin-sub.module';
import { CampaignInstagramFollowModule } from './modules/campaign-instagram-follow/campaign-instagram-follow.module';
import { CampaignPetFormModule } from './modules/campaign-pet-form/campaign-pet-form.module';
import { CampaignRoomvoImageModule } from './modules/campaign-roomvo-image/campaign-roomvo-image.module';
import { CampaignRoomvoVoteModule } from './modules/campaign-roomvo-vote/campaign-roomvo-vote.module';
import { CampaignSubscriptionModule } from './modules/campaign-subscription/campaign-subscription.module';
import { CampaignUefaEuroSubscriberHistoryModule } from './modules/campaign-uefa-euro-subscriber-history/campaign-uefa-euro-subscriber-history.module';
import { CampaignUefaEuroSubscriberModule } from './modules/campaign-uefa-euro-subscriber/campaign-uefa-euro-subscriber.module';
import { CampaignVotingImageModule } from './modules/campaign-voting-image/campaign-voting-image.module';
import { CarpetFeatureUserModule } from './modules/carpet-feature-user/carpet-feature-user.module';
import { CarpetFeatureModule } from './modules/carpet-feature/carpet-feature.module';
import { CarpetMaterialModule } from './modules/carpet-material/carpet-material.module';
import { CarpetShapeModule } from './modules/carpet-shape/carpet-shape.module';
import { CarpetSizeModule } from './modules/carpet-size/carpet-size.module';
import { CarpetUsagePlaceInvoiceProductModule } from './modules/carpet-usage-place-invoice-product/carpet-usage-place-invoice-product.module';
import { CarpetUsagePlaceUserModule } from './modules/carpet-usage-place-user/carpet-usage-place-user.module';
import { CarpetUsagePlaceModule } from './modules/carpet-usage-place/carpet-usage-place.module';
import { ChaparSettlementStatusModule } from './modules/chapar-settlement-status/chapar-settlement-status.module';
import { ChaparTrackingHistoryModule } from './modules/chapar-tracking-history/chapar-tracking-history.module';
import { CitiesSepidarModule } from './modules/cities-sepidar/cities-sepidar.module';
import { CityModule } from './modules/city/city.module';
import { City2Module } from './modules/city2/city2.module';
import { ColorCategoryDetailModule } from './modules/color-category-detail/color-category-detail.module';
import { ColorCategorySubproductModule } from './modules/color-category-subproduct/color-category-subproduct.module';
import { ColorCategoryModule } from './modules/color-category/color-category.module';
import { ColorModule } from './modules/color/color.module';
import { ConfigModule } from './modules/config/config.module';
import { ContactFormHistoryModule } from './modules/contact-form-history/contact-form-history.module';
import { ContactFormStatusModule } from './modules/contact-form-status/contact-form-status.module';
import { ContactFormModule } from './modules/contact-form/contact-form.module';
import { CountryModule } from './modules/country/country.module';
import { CouponSubjectModule } from './modules/coupon-subject/coupon-subject.module';
import { CouponModule } from './modules/coupon/coupon.module';
import { CrmPresentationModule } from './modules/crm-presentation/crm-presentation.module';
import { CustomerImageProductModule } from './modules/customer-image-product/customer-image-product.module';
import { CustomerRequestFileModule } from './modules/customer-request-file/customer-request-file.module';
import { CustomerRequestModule } from './modules/customer-request/customer-request.module';
import { CustomerVideoProductModule } from './modules/customer-video-product/customer-video-product.module';
import { DamageReasonModule } from './modules/damage-reason/damage-reason.module';
import { DepartmentModule } from './modules/department/department.module';
import { DesignModule } from './modules/design/design.module';
import { DesignersProductPriceRangeModule } from './modules/designers-product-price-range/designers-product-price-range.module';
import { DiscountNotificationModule } from './modules/discount-notification/discount-notification.module';
import { DiscountSubjectModule } from './modules/discount-subject/discount-subject.module';
import { DiscountModule } from './modules/discount/discount.module';
import { ExitControlItemModule } from './modules/exit-control-item/exit-control-item.module';
import { ExitControlModule } from './modules/exit-control/exit-control.module';
import { ExportProductModule } from './modules/export-product/export-product.module';
import { FailedJobModule } from './modules/failed-job/failed-job.module';
import { FavoriteProductModule } from './modules/favorite-product/favorite-product.module';
import { FedexAddressValidationAttributeModule } from './modules/fedex-address-validation-attribute/fedex-address-validation-attribute.module';
import { FetchSiteUrlModule } from './modules/fetch-site-url/fetch-site-url.module';
import { FileNegotiationModule } from './modules/file-negotiation/file-negotiation.module';
import { FileModule } from './modules/file/file.module';
import { GhazalModule } from './modules/ghazal/ghazal.module';
import { GoogleFormUtmModule } from './modules/google-form-utm/google-form-utm.module';
import { HeardAboutUsOptionModule } from './modules/heard-about-us-option/heard-about-us-option.module';
import { HelpDeskModule } from './modules/help-desk/help-desk.module';
import { HolidayModule } from './modules/holiday/holiday.module';
import { HomePageCustomerImageModule } from './modules/home-page-customer-image/home-page-customer-image.module';
import { HyperModule } from './modules/hyper/hyper.module';
import { HyperstarCodeModule } from './modules/hyperstar-code/hyperstar-code.module';
import { ImageModule } from './modules/image/image.module';

import redisConfig from '@/configuration/redis.config';
import { AuthModule } from '@/modules/auth/auth.module';
import jwtConfig from '@/modules/auth/config/jwt.config';
import { AccessTokenGuard } from '@/modules/auth/guards/access-token/access-token.guard';
import { AuthenticationGuard } from '@/modules/auth/guards/authentication/authentication.gurad';
import { BasicCarpetBrandModule } from '@/modules/basic-carpet-brand/basic-carpet-brand.module';
import { CampaignVotingImageUserModule } from '@/modules/campaign-voting-image-user/campaign-voting-image-user.module';
import { ImageProductModule } from '@/modules/image-product/image-product.module';
import { ImageSizeModule } from '@/modules/image-size/image-size.module';
import { ImageSubproductModule } from '@/modules/image-subproduct/image-subproduct.module';
import { ImagesSizeGuidesDetailModule } from '@/modules/images-size-guides-detail/images-size-guides-detail.module';
import { ImpersonateHistoryModule } from '@/modules/impersonate-history/impersonate-history.module';
import { IncredibleOfferSentNotificationModule } from '@/modules/incredible-offer-sent-notification/incredible-offer-sent-notification.module';
import { IncredibleOfferModule } from '@/modules/incredible-offer/incredible-offer.module';
import { InstagramFeedModule } from '@/modules/instagram-feed/instagram-feed.module';
import { InvitationCodeModule } from '@/modules/invitation-code/invitation-code.module';
import { InvoiceAddressValidationResultModule } from '@/modules/invoice-address-validation-result/invoice-address-validation-result.module';
import { InvoiceAddressModule } from '@/modules/invoice-address/invoice-address.module';
import { InvoiceBankGatewayHistoryModule } from '@/modules/invoice-bank-gateway-history/invoice-bank-gateway-history.module';
import { InvoiceHistoryModule } from '@/modules/invoice-history/invoice-history.module';
import { InvoiceInvoiceStatusModule } from '@/modules/invoice-invoice-status/invoice-invoice-status.module';
import { InvoiceModeModule } from '@/modules/invoice-mode/invoice-mode.module';
import { InvoiceNegotiationModule } from '@/modules/invoice-negotiation/invoice-negotiation.module';
import { InvoicePaymentHistoryModule } from '@/modules/invoice-payment-history/invoice-payment-history.module';
import { InvoicePaymentStatusModule } from '@/modules/invoice-payment-status/invoice-payment-status.module';
import { InvoicePaymentTypeModule } from '@/modules/invoice-payment-type/invoice-payment-type.module';
import { InvoicePaymentModule } from '@/modules/invoice-payment/invoice-payment.module';
import { InvoiceProductHistoryModule } from '@/modules/invoice-product-history/invoice-product-history.module';
import { InvoiceProductItemInvoiceProductStatusModule } from '@/modules/invoice-product-item-invoice-product-status/invoice-product-item-invoice-product-status.module';
import { InvoiceProductItemModule } from '@/modules/invoice-product-item/invoice-product-item.module';
import { InvoiceProductStatusModule } from '@/modules/invoice-product-status/invoice-product-status.module';
import { InvoiceProductModule } from '@/modules/invoice-product/invoice-product.module';
import { InvoiceRatesResultModule } from '@/modules/invoice-rates-result/invoice-rates-result.module';
import { InvoiceReversalItemModule } from '@/modules/invoice-reversal-item/invoice-reversal-item.module';
import { InvoiceReversalModule } from '@/modules/invoice-reversal/invoice-reversal.module';
import { InvoiceShippingRateModule } from '@/modules/invoice-shipping-rate/invoice-shipping-rate.module';
import { InvoiceStatusModule } from '@/modules/invoice-status/invoice-status.module';
import { InvoiceTypeModule } from '@/modules/invoice-type/invoice-type.module';
import { InvoiceModule } from '@/modules/invoice/invoice.module';
import { JobsModule } from '@/modules/jobs/jobs.module';
import { LabelProductModule } from '@/modules/label-product/label-product.module';
import { LabelModule } from '@/modules/label/label.module';
import { MellatPaymentErrorModule } from '@/modules/mellat-payment-error/mellat-payment-error.module';
import { MigrationModule } from '@/modules/migration/migration.module';
import { ModelHasPermissionModule } from '@/modules/model-has-permission/model-has-permission.module';
import { ModelHasRoleModule } from '@/modules/model-has-role/model-has-role.module';
import { ModelVisitModule } from '@/modules/model-visit/model-visit.module';
import { ModemaAcceleratorImageModule } from '@/modules/modema-accelerator-image/modema-accelerator-image.module';
import { ModemaAcceleratorVideoModule } from '@/modules/modema-accelerator-video/modema-accelerator-video.module';
import { ModemaAcceleratorModule } from '@/modules/modema-accelerator/modema-accelerator.module';
import { NeedsPhotographySubproductModule } from '@/modules/needs-photography-subproduct/needs-photography-subproduct.module';
import { NegotiationHistoryModule } from '@/modules/negotiation-history/negotiation-history.module';
import { NegotiationStatusModule } from '@/modules/negotiation-status/negotiation-status.module';
import { NegotiationStepModule } from '@/modules/negotiation-step/negotiation-step.module';
import { NegotiationTypeModule } from '@/modules/negotiation-type/negotiation-type.module';
import { NegotiationModule } from '@/modules/negotiation/negotiation.module';
import { NewBorderModule } from '@/modules/new-border/new-border.module';
import { OauthAccessTokenModule } from '@/modules/oauth-access-token/oauth-access-token.module';
import { OauthAuthCodeModule } from '@/modules/oauth-auth-code/oauth-auth-code.module';
import { OauthClientModule } from '@/modules/oauth-client/oauth-client.module';
import { OauthPersonalAccessClientModule } from '@/modules/oauth-personal-access-client/oauth-personal-access-client.module';
import { OauthRefreshTokenModule } from '@/modules/oauth-refresh-token/oauth-refresh-token.module';
import { OutOfStockButListedProductModule } from '@/modules/out-of-stock-but-listed-product/out-of-stock-but-listed-product.module';
import { PasswordResetModule } from '@/modules/password-reset/password-reset.module';
import { PatternCategoryModule } from '@/modules/pattern-category/pattern-category.module';
import { PatternLayerModule } from '@/modules/pattern-layer/pattern-layer.module';
import { PatternModule } from '@/modules/pattern/pattern.module';
import { PaymentMethodFieldModule } from '@/modules/payment-method-field/payment-method-field.module';
import { PaymentMethodModule } from '@/modules/payment-method/payment-method.module';
import { PaymentRequestStatusModule } from '@/modules/payment-request-status/payment-request-status.module';
import { PaymentRequestModule } from '@/modules/payment-request/payment-request.module';
import { PermissionGroupModule } from '@/modules/permission-group/permission-group.module';
import { PermissionModule } from '@/modules/permission/permission.module';
import { PreorderPreorderStatusModule } from '@/modules/preorder-preorder-status/preorder-preorder-status.module';
import { PreorderRegisterModule } from '@/modules/preorder-register/preorder-register.module';
import { PreorderStatusModule } from '@/modules/preorder-status/preorder-status.module';
import { PreorderModule } from '@/modules/preorder/preorder.module';
import { PriceGroupSizeModule } from '@/modules/price-group-size/price-group-size.module';
import { PriceGroupModule } from '@/modules/price-group/price-group.module';
import { PrintMachineModule } from '@/modules/print-machine/print-machine.module';
import { PrintProfileModule } from '@/modules/print-profile/print-profile.module';
import { PrintRipModule } from '@/modules/print-rip/print-rip.module';
import { ProductCategoryDetailModule } from '@/modules/product-category-detail/product-category-detail.module';
import { ProductCategoryRateModule } from '@/modules/product-category-rate/product-category-rate.module';
import { ProductCategoryModule } from '@/modules/product-category/product-category.module';
import { ProductColorImageModule } from '@/modules/product-color-image/product-color-image.module';
import { ProductColorSaleModule } from '@/modules/product-color-sale/product-color-sale.module';
import { ProductCommentLikeModule } from '@/modules/product-comment-like/product-comment-like.module';
import { ProductCommentModule } from '@/modules/product-comment/product-comment.module';
import { ProductLikeModule } from '@/modules/product-like/product-like.module';
import { ProductProductCategoryModule } from '@/modules/product-product-category/product-product-category.module';
import { ProductRateAverageModule } from '@/modules/product-rate-average/product-rate-average.module';
import { ProductRateModule } from '@/modules/product-rate/product-rate.module';
import { ProductTagModule } from '@/modules/product-tag/product-tag.module';
import { ProductVideoModule } from '@/modules/product-video/product-video.module';
import { ProductModule } from '@/modules/product/product.module';
import { ProductionPadProductionPadStatusModule } from '@/modules/production-pad-production-pad-status/production-pad-production-pad-status.module';
import { ProductionPadRollModule } from '@/modules/production-pad-roll/production-pad-roll.module';
import { ProductionPadStatusModule } from '@/modules/production-pad-status/production-pad-status.module';
import { ProductionPadModule } from '@/modules/production-pad/production-pad.module';
import { ProductionReceiptTypeModule } from '@/modules/production-receipt-type/production-receipt-type.module';
import { ProductionReceiptModule } from '@/modules/production-receipt/production-receipt.module';
import { ProductionRollModule } from '@/modules/production-roll/production-roll.module';
import { RateModule } from '@/modules/rate/rate.module';
import { ReadyToSendProductModule } from '@/modules/ready-to-send-product/ready-to-send-product.module';
import { RecommendedProductModule } from '@/modules/recommended-product/recommended-product.module';
import { RecommendedSubproductModule } from '@/modules/recommended-subproduct/recommended-subproduct.module';
import { RedisSavedKeyModule } from '@/modules/redis-saved-key/redis-saved-key.module';
import { RelatedProductModule } from '@/modules/related-product/related-product.module';
import { RetargetingWalletChargeModule } from '@/modules/retargeting-wallet-charge/retargeting-wallet-charge.module';
import { ReturnItemStatusReturnRequestItemModule } from '@/modules/return-item-status-return-request-item/return-item-status-return-request-item.module';
import { ReturnItemStatusModule } from '@/modules/return-item-status/return-item-status.module';
import { ReturnReasonModule } from '@/modules/return-reason/return-reason.module';
import { ReturnRequestAddressModule } from '@/modules/return-request-address/return-request-address.module';
import { ReturnRequestHistoryModule } from '@/modules/return-request-history/return-request-history.module';
import { ReturnRequestItemHistoryModule } from '@/modules/return-request-item-history/return-request-item-history.module';
import { ReturnRequestItemImageModule } from '@/modules/return-request-item-image/return-request-item-image.module';
import { ReturnRequestItemReturnItemStatusModule } from '@/modules/return-request-item-return-item-status/return-request-item-return-item-status.module';
import { ReturnRequestItemVideoModule } from '@/modules/return-request-item-video/return-request-item-video.module';
import { ReturnRequestItemModule } from '@/modules/return-request-item/return-request-item.module';
import { ReturnRequestReturnStatusModule } from '@/modules/return-request-return-status/return-request-return-status.module';
import { ReturnRequestModule } from '@/modules/return-request/return-request.module';
import { ReturnStatusModule } from '@/modules/return-status/return-status.module';
import { ReturnTypeModule } from '@/modules/return-type/return-type.module';
import { ReturnedInvoiceProductModule } from '@/modules/returned-invoice-product/returned-invoice-product.module';
import { ReturnedInvoiceModule } from '@/modules/returned-invoice/returned-invoice.module';
import { RfmReportModule } from '@/modules/rfm-report/rfm-report.module';
import { RipTemplateItemModule } from '@/modules/rip-template-item/rip-template-item.module';
import { RipTemplateModule } from '@/modules/rip-template/rip-template.module';
import { RoleHasPermissionModule } from '@/modules/role-has-permission/role-has-permission.module';
import { RoleModule } from '@/modules/role/role.module';
import { RussianModule } from '@/modules/russian/russian.module';
import { SenderInformationModule } from '@/modules/sender-information/sender-information.module';
import { SettingModule } from '@/modules/setting/setting.module';
import { SettingsHistoryModule } from '@/modules/settings-history/settings-history.module';
import { ShippingServiceModule } from '@/modules/shipping-service/shipping-service.module';
import { SitemapStaticPageModule } from '@/modules/sitemap-static-page/sitemap-static-page.module';
import { SizeGuideModule } from '@/modules/size-guide/size-guide.module';
import { SizeGuidesDetailModule } from '@/modules/size-guides-detail/size-guides-detail.module';
import { SocialFacebookAccountModule } from '@/modules/social-facebook-account/social-facebook-account.module';
import { SocialGoogleAccountModule } from '@/modules/social-google-account/social-google-account.module';
import { SpecialOfferModule } from '@/modules/special-offer/special-offer.module';
import { StateModule } from '@/modules/state/state.module';
import { SubcolorModule } from '@/modules/subcolor/subcolor.module';
import { SubproductSpecialImageModule } from '@/modules/subproduct-special-image/subproduct-special-image.module';
import { SubproductStockHistoryModule } from '@/modules/subproduct-stock-history/subproduct-stock-history.module';
import { SubproductVideoModule } from '@/modules/subproduct-video/subproduct-video.module';
import { SubproductModule } from '@/modules/subproduct/subproduct.module';
import { SubscriberModule } from '@/modules/subscriber/subscriber.module';
import { TagModule } from '@/modules/tag/tag.module';
import { TempSubproductDiscountModule } from '@/modules/temp-subproduct-discount/temp-subproduct-discount.module';
import { TestimonialModule } from '@/modules/testimonial/testimonial.module';
import { TextLayerModule } from '@/modules/text-layer/text-layer.module';
import { TmpRfmReportModule } from '@/modules/tmp-rfm-report/tmp-rfm-report.module';
import { TmpRussiaProductModule } from '@/modules/tmp-russia-product/tmp-russia-product.module';
import { TmpSpainOrderModule } from '@/modules/tmp-spain-order/tmp-spain-order.module';
import { TmpSpanishNameModule } from '@/modules/tmp-spanish-name/tmp-spanish-name.module';
import { TmpTagChangesPrintModule } from '@/modules/tmp-tag-changes-print/tmp-tag-changes-print.module';
import { TorobProductModule } from '@/modules/torob-product/torob-product.module';
import { TransactionModule } from '@/modules/transaction/transaction.module';
import { UserCartModule } from '@/modules/user-cart/user-cart.module';
import { UserHasPermissionModule } from '@/modules/user-has-permission/user-has-role.module';
import { UserUtmModule } from '@/modules/user-utm/user-utm.module';
import { UserController } from '@/modules/user/user.controller';
import { UtmGoogleFormCouponModule } from '@/modules/utm-google-form-coupon/utm-google-form-coupon.module';
import { UtmModule } from '@/modules/utm/utm.module';
import { VerifyUserModule } from '@/modules/verify-user/verify-user.module';
import { VideoModule } from '@/modules/video/video.module';
import { VisitorCouponModule } from '@/modules/visitor-coupon/visitor-coupon.module';
import { VisitorGroupRateModule } from '@/modules/visitor-group-rate/visitor-group-rate.module';
import { VisitorGroupModule } from '@/modules/visitor-group/visitor-group.module';
import { VisitorSaleModule } from '@/modules/visitor-sale/visitor-sale.module';
import { VisitorModule } from '@/modules/visitor/visitor.module';
import { WalletGiftChargeModule } from '@/modules/wallet-gift-charge/wallet-gift-charge.module';
import { WalletHistoryModule } from '@/modules/wallet-history/wallet-history.module';
import { WalletModule } from '@/modules/wallet/wallet.module';
import { WebsitePageModule } from '@/modules/website-page/website-page.module';
import { WebsiteVisitModule } from '@/modules/website-visit/website-visit.module';
import { WithdrawalRequestStatusModule } from '@/modules/withdrawal-request-status/withdrawal-request-status.module';
import { WithdrawalRequestModule } from '@/modules/withdrawal-request/withdrawal-request.module';
import { WonderfulOfferModule } from '@/modules/wonderful-offer/wonderful-offer.module';
import { BullModule } from '@nestjs/bullmq';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { GraphQLError } from 'graphql/error';
import * as process from 'node:process';
import { ExternalApiModule } from './modules/external-api/external-api.module';
import { QueueModule } from './modules/queue/queue.module';
import { SmsModule } from './modules/sms/sms.module';
import { TagDetailModule } from './modules/tag-detail/tag-detail.module';
import { UserHasRoleModule } from './modules/user-has-role/user-has-role.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigServiceNest],
      useFactory: (configService: ConfigServiceNest) => ({
        connection: {
          host: configService.get('redis.host'),
          port: +configService.get('redis.port'),
        },
      }),
    }),

    ConfigModuleNest.forRoot({
      isGlobal: true,
      // validationSchema: validationSchema,
      envFilePath: [!ENV ? '.env' : `.env.${ENV}`],
      load: [databaseConfig, generalConfig, redisConfig],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigServiceNest],
      useFactory: (configService: ConfigServiceNest) => ({
        type: 'mysql',
        host: configService.get('database.host'),
        port: +configService.get('database.port'),
        username: configService.get('database.user'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        autoLoadEntities: true,
        synchronize: false,
        retryAttempts: 0, // Disable retry
        retryDelay: 0, // No delay
        // logging: ['query'],
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: false,
      debug: true,
      sortSchema: true,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],

      context: ({ req, res }) => {
        const authHeader = req.headers.authorization || '';
        const token = authHeader.startsWith('Bearer ')
          ? authHeader.slice(7)
          : null;

        return {
          req,
          token,
          res,
        };
      },

      formatError: (error: GraphQLError) => {
        const originalError = error.extensions.originalError as any;

        const formattedError = {
          message: originalError?.message || error.message,
          error: originalError?.error || 'Internal Server Error',
          statusCode: originalError?.statusCode || 500,
        };

        // Only add stack trace in development
        if (originalError?.stack) {
          (formattedError as any).stack = originalError.stack;
        }

        return formattedError;
      },
    }),
    ActivityModule,
    AddressModule,
    AttributeAttributeGroupModule,
    AttributeGroupModule,
    AttributeItemModule,
    AttributeProductModule,
    AttributeSubproductModule,
    AttributeModule,
    AutomationEventModule,
    AutomationRfmScoreModule,
    BasicCarpetBorderModule,
    BasicCarpetColorModule,
    BasicCarpetDesignModule,
    BasicCarpetDesignerModule,
    BasicCarpetMaterialModule,
    BasicCarpetSizeModule,
    BasicCarpetSizeDetailModule,
    BasicCarpetTypeModule,
    BasicCarpetBrandModule,
    BorderModule,
    CampaignFreeOfferModule,
    CampaignFreeOfferSizeModule,
    CampaignGoldCoinSubModule,
    CampaignInstagramFollowModule,
    CampaignPetFormModule,
    CampaignRoomvoImageModule,
    CampaignRoomvoVoteModule,
    CampaignSubscriptionModule,
    CampaignUefaEuroSubscriberModule,
    CampaignUefaEuroSubscriberHistoryModule,
    CampaignVotingImageModule,
    CarpetFeatureModule,
    CarpetFeatureUserModule,
    CarpetMaterialModule,
    CarpetShapeModule,
    CarpetSizeModule,
    CarpetUsagePlaceModule,
    CarpetUsagePlaceInvoiceProductModule,
    CarpetUsagePlaceUserModule,
    ChaparSettlementStatusModule,
    ChaparTrackingHistoryModule,
    CitiesSepidarModule,
    CityModule,
    City2Module,
    ColorModule,
    ColorCategoryModule,
    ColorCategoryDetailModule,
    ColorCategorySubproductModule,
    ConfigModule,
    ContactFormModule,
    ContactFormHistoryModule,
    ContactFormStatusModule,
    CountryModule,
    CouponModule,
    CouponSubjectModule,
    CrmPresentationModule,
    CustomerImageProductModule,
    CustomerRequestModule,
    CustomerRequestFileModule,
    CustomerVideoProductModule,
    DamageReasonModule,
    DepartmentModule,
    DesignModule,
    DesignersProductPriceRangeModule,
    DiscountModule,
    DiscountNotificationModule,
    DiscountSubjectModule,
    ExitControlModule,
    ExitControlItemModule,
    ExportProductModule,
    FailedJobModule,
    FavoriteProductModule,
    FedexAddressValidationAttributeModule,
    FetchSiteUrlModule,
    FileModule,
    FileNegotiationModule,
    GhazalModule,
    GoogleFormUtmModule,
    HeardAboutUsOptionModule,
    HelpDeskModule,
    HolidayModule,
    HomePageCustomerImageModule,
    HyperModule,
    HyperstarCodeModule,
    ImageModule,
    ImageLayerModule,
    ImageProductModule,
    ImageSizeModule,
    ImageSubproductModule,
    ImagesSizeGuidesDetailModule,
    ImpersonateHistoryModule,
    IncredibleOfferModule,
    IncredibleOfferSentNotificationModule,
    InstagramFeedModule,
    InvitationCodeModule,
    InvoiceModule,
    InvoiceAddressModule,
    InvoiceBankGatewayHistoryModule,
    InvoiceHistoryModule,
    InvoiceInvoiceStatusModule,
    InvoiceModeModule,
    InvoiceNegotiationModule,
    InvoicePaymentModule,
    InvoicePaymentHistoryModule,
    InvoicePaymentStatusModule,
    InvoicePaymentTypeModule,
    InvoiceProductModule,
    InvoiceProductHistoryModule,
    InvoiceProductItemModule,
    InvoiceProductItemInvoiceProductStatusModule,
    InvoiceProductStatusModule,
    InvoiceRatesResultModule,
    InvoiceReversalModule,
    InvoiceReversalItemModule,
    InvoiceShippingRateModule,
    InvoiceStatusModule,
    InvoiceTypeModule,
    InvoiceAddressValidationResultModule,
    CampaignVotingImageUserModule,
    LabelModule,
    LabelProductModule,
    MellatPaymentErrorModule,
    MigrationModule,
    ModelHasPermissionModule,
    ModelHasRoleModule,
    ModelVisitModule,
    ModemaAcceleratorModule,
    ModemaAcceleratorImageModule,
    ModemaAcceleratorVideoModule,
    NeedsPhotographySubproductModule,
    NegotiationModule,
    NegotiationHistoryModule,
    NegotiationStatusModule,
    NegotiationStepModule,
    NegotiationTypeModule,
    NewBorderModule,
    OauthAccessTokenModule,
    OauthAuthCodeModule,
    OauthClientModule,
    OauthPersonalAccessClientModule,
    OauthRefreshTokenModule,
    OutOfStockButListedProductModule,
    PasswordResetModule,
    PatternModule,
    PatternCategoryModule,
    PatternLayerModule,
    PaymentMethodModule,
    PaymentMethodFieldModule,
    PaymentRequestModule,
    PaymentRequestStatusModule,
    PermissionModule,
    PermissionGroupModule,
    PreorderModule,
    PreorderPreorderStatusModule,
    PreorderRegisterModule,
    PreorderStatusModule,
    PriceGroupModule,
    PriceGroupSizeModule,
    PrintProfileModule,
    ProductModule,
    ProductCategoryModule,
    PrintRipModule,
    ProductCategoryDetailModule,
    ProductCategoryRateModule,
    ProductColorImageModule,
    ProductColorSaleModule,
    ProductCommentModule,
    ProductCommentLikeModule,
    ProductLikeModule,
    ProductRateModule,
    ProductRateAverageModule,
    ProductTagModule,
    ProductVideoModule,
    ProductionPadModule,
    ProductionPadProductionPadStatusModule,
    ProductionPadStatusModule,
    ProductionReceiptTypeModule,
    ProductionRollModule,
    ProductProductCategoryModule,
    RateModule,
    RecommendedProductModule,
    ReadyToSendProductModule,
    RecommendedSubproductModule,
    RedisSavedKeyModule,
    RelatedProductModule,
    RetargetingWalletChargeModule,
    ReturnItemStatusModule,
    ReturnItemStatusReturnRequestItemModule,
    ReturnReasonModule,
    ReturnRequestModule,
    ReturnRequestAddressModule,
    ReturnRequestHistoryModule,
    ReturnRequestItemModule,
    ReturnRequestItemHistoryModule,
    ReturnRequestItemImageModule,
    ReturnRequestItemReturnItemStatusModule,
    ReturnRequestItemVideoModule,
    ReturnRequestReturnStatusModule,
    ReturnStatusModule,
    ReturnTypeModule,
    ReturnedInvoiceModule,
    ReturnedInvoiceProductModule,
    RfmReportModule,
    RipTemplateModule,
    RipTemplateItemModule,
    RoleModule,
    RoleHasPermissionModule,
    RussianModule,
    SenderInformationModule,
    ShippingServiceModule,
    SitemapStaticPageModule,
    SizeGuideModule,
    SizeGuidesDetailModule,
    SocialFacebookAccountModule,
    SocialGoogleAccountModule,
    SpecialOfferModule,
    StateModule,
    SubcolorModule,
    SubproductModule,
    SubproductSpecialImageModule,
    SubproductStockHistoryModule,
    SubproductVideoModule,
    SubscriberModule,
    TagModule,
    TempSubproductDiscountModule,
    TestimonialModule,
    TextLayerModule,
    TmpRfmReportModule,
    TmpRussiaProductModule,
    TmpSpainOrderModule,
    TmpSpanishNameModule,
    TmpTagChangesPrintModule,
    TorobProductModule,
    TransactionModule,
    UserModule,
    UserUtmModule,
    UserCartModule,
    UtmModule,
    UtmGoogleFormCouponModule,
    VerifyUserModule,
    VideoModule,
    VisitorModule,
    VisitorCouponModule,
    VisitorGroupModule,
    VisitorGroupRateModule,
    VisitorSaleModule,
    WalletModule,
    WalletGiftChargeModule,
    WalletHistoryModule,
    WebsitePageModule,
    WebsiteVisitModule,
    WithdrawalRequestModule,
    WithdrawalRequestStatusModule,
    WonderfulOfferModule,
    UserHasRoleModule,
    UserHasPermissionModule,
    AuthModule,
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModuleNest.forFeature(jwtConfig),
    SettingModule,
    SettingsHistoryModule,
    ExternalApiModule,
    SmsModule,
    QueueModule,
    JobsModule,
    TagDetailModule,
    PrintMachineModule,
    ProductionPadRollModule,
    ProductionReceiptModule,
  ],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
    AccessTokenGuard,
  ],
})
export class AppModule {}
