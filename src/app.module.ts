import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
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
import { BasicCarpetSizeModule } from './modules/basic-carpet-size/basic-carpet-size.module';
import { BasicCarpetSizeDetailModule } from './modules/basic-carpet-size-detail/basic-carpet-size-detail.module';
import { BasicCarpetTypeModule } from './modules/basic-carpet-type/basic-carpet-type.module';
import { BorderModule } from './modules/border/border.module';
import { CampaignFreeOfferModule } from './modules/campaign-free-offer/campaign-free-offer.module';
import { CampaignFreeOfferSizeModule } from './modules/campaign-free-offer-size/campaign-free-offer-size.module';
import { CampaignGoldCoinSubModule } from './modules/campaign-gold-coin-sub/campaign-gold-coin-sub.module';
import { CampaignInstagramFollowModule } from './modules/campaign-instagram-follow/campaign-instagram-follow.module';
import { CampaignPetFormModule } from './modules/campaign-pet-form/campaign-pet-form.module';
import { CampaignRoomvoImageModule } from './modules/campaign-roomvo-image/campaign-roomvo-image.module';
import { CampaignRoomvoVoteModule } from './modules/campaign-roomvo-vote/campaign-roomvo-vote.module';
import { CampaignSubscriptionModule } from './modules/campaign-subscription/campaign-subscription.module';
import { CampaignUefaEuroSubscriberModule } from './modules/campaign-uefa-euro-subscriber/campaign-uefa-euro-subscriber.module';
import { CampaignUefaEuroSubscriberHistoryModule } from './modules/campaign-uefa-euro-subscriber-history/campaign-uefa-euro-subscriber-history.module';
import { CampaignVotingImageModule } from './modules/campaign-voting-image/campaign-voting-image.module';
import { CarpetFeatureModule } from './modules/carpet-feature/carpet-feature.module';
import { CarpetFeatureUserModule } from './modules/carpet-feature-user/carpet-feature-user.module';
import { CarpetMaterialModule } from './modules/carpet-material/carpet-material.module';
import { CarpetShapeModule } from './modules/carpet-shape/carpet-shape.module';
import { CarpetSizeModule } from './modules/carpet-size/carpet-size.module';
import { CarpetUsagePlaceModule } from './modules/carpet-usage-place/carpet-usage-place.module';
import { CarpetUsagePlaceInvoiceProductModule } from './modules/carpet-usage-place-invoice-product/carpet-usage-place-invoice-product.module';
import { CarpetUsagePlaceUserModule } from './modules/carpet-usage-place-user/carpet-usage-place-user.module';
import { ChaparSettlementStatusModule } from './modules/chapar-settlement-status/chapar-settlement-status.module';
import { ChaparTrackingHistoryModule } from './modules/chapar-tracking-history/chapar-tracking-history.module';
import { CitiesSepidarModule } from './modules/cities-sepidar/cities-sepidar.module';
import { CityModule } from './modules/city/city.module';
import { City2Module } from './modules/city2/city2.module';
import { ColorModule } from './modules/color/color.module';
import { ColorCategoryModule } from './modules/color-category/color-category.module';
import { ColorCategoryDetailModule } from './modules/color-category-detail/color-category-detail.module';
import { ColorCategorySubproductModule } from './modules/color-category-subproduct/color-category-subproduct.module';
import { ConfigModule } from './modules/config/config.module';
import { ContactFormModule } from './modules/contact-form/contact-form.module';
import { ContactFormHistoryModule } from './modules/contact-form-history/contact-form-history.module';
import { ContactFormStatusModule } from './modules/contact-form-status/contact-form-status.module';
import { CountryModule } from './modules/country/country.module';
import { CouponModule } from './modules/coupon/coupon.module';
import { CouponSubjectModule } from './modules/coupon-subject/coupon-subject.module';
import { CrmPresentationModule } from './modules/crm-presentation/crm-presentation.module';
import { CustomerImageProductModule } from './modules/customer-image-product/customer-image-product.module';
import { CustomerRequestModule } from './modules/customer-request/customer-request.module';
import { CustomerRequestFileModule } from './modules/customer-request-file/customer-request-file.module';
import { CustomerVideoProductModule } from './modules/customer-video-product/customer-video-product.module';
import { DamageReasonModule } from './modules/damage-reason/damage-reason.module';
import { DepartmentModule } from './modules/department/department.module';
import { DesignModule } from './modules/design/design.module';
import { DesignersProductPriceRangeModule } from './modules/designers-product-price-range/designers-product-price-range.module';
import { DiscountModule } from './modules/discount/discount.module';
import { DiscountNotificationModule } from './modules/discount-notification/discount-notification.module';
import { DiscountSubjectModule } from './modules/discount-subject/discount-subject.module';
import { ExitControlModule } from './modules/exit-control/exit-control.module';
import { ExitControlItemModule } from './modules/exit-control-item/exit-control-item.module';
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
import { UserModule } from '@/modules/user/user.module';
import { ImageLayerModule } from '@/modules/image-layer/image-layer.module';
import databaseConfig from '@/configuration/database.config';
import {
  ConfigModule as ConfigModuleNest,
  ConfigService as ConfigServiceNest,
} from '@nestjs/config';

import * as process from 'node:process';
import { ImageProductModule } from '@/modules/image-product/image-product.module';
import { ImageSizeModule } from '@/modules/image-size/image-size.module';
import { ImageSubproductModule } from '@/modules/image-subproduct/image-subproduct.module';
import { ImagesSizeGuidesDetailModule } from '@/modules/images-size-guides-detail/images-size-guides-detail.module';
import { ImpersonateHistoryModule } from '@/modules/impersonate-history/impersonate-history.module';
import { IncredibleOfferModule } from '@/modules/incredible-offer/incredible-offer.module';
import { IncredibleOfferSentNotificationModule } from '@/modules/incredible-offer-sent-notification/incredible-offer-sent-notification.module';
import { InstagramFeedModule } from '@/modules/instagram-feed/instagram-feed.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModuleNest.forRoot({
      isGlobal: true,
      envFilePath: [!ENV ? '.env' : `.env.${ENV}`],
      load: [databaseConfig],
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
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
