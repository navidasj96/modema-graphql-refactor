import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ActivityModule } from './module/activity/activity.module';
import { AddressModule } from './module/address/address.module';
import { AttributeAttributeGroupModule } from './module/attribute-attribute-group/attribute-attribute-group.module';
import { AttributeGroupModule } from './module/attribute-group/attribute-group.module';
import { AttributeItemModule } from './module/attribute-item/attribute-item.module';
import { AttributeProductModule } from './module/attribute-product/attribute-product.module';
import { AttributeSubproductModule } from './module/attribute-subproduct/attribute-subproduct.module';
import { AttributeModule } from './module/attribute/attribute.module';
import { AutomationEventModule } from './module/automation-event/automation-event.module';
import { AutomationRfmScoreModule } from './module/automation-rfm-score/automation-rfm-score.module';
import { BasicCarpetBorderModule } from './module/basic-carpet-border/basic-carpet-border.module';
import { BasicCarpetColorModule } from './module/basic-carpet-color/basic-carpet-color.module';
import { BasicCarpetDesignModule } from './module/basic-carpet-design/basic-carpet-design.module';
import { BasicCarpetDesignerModule } from './module/basic-carpet-designer/basic-carpet-designer.module';
import { BasicCarpetMaterialModule } from './module/basic-carpet-material/basic-carpet-material.module';
import { BasicCarpetSizeModule } from './module/basic-carpet-size/basic-carpet-size.module';
import { BasicCarpetSizeDetailModule } from './module/basic-carpet-size-detail/basic-carpet-size-detail.module';
import { BasicCarpetTypeModule } from './module/basic-carpet-type/basic-carpet-type.module';
import { BorderModule } from './module/border/border.module';
import { CampaignFreeOfferModule } from './module/campaign-free-offer/campaign-free-offer.module';
import { CampaignFreeOfferSizeModule } from './module/campaign-free-offer-size/campaign-free-offer-size.module';
import { CampaignGoldCoinSubModule } from './module/campaign-gold-coin-sub/campaign-gold-coin-sub.module';
import { CampaignInstagramFollowModule } from './module/campaign-instagram-follow/campaign-instagram-follow.module';
import { CampaignPetFormModule } from './module/campaign-pet-form/campaign-pet-form.module';
import { CampaignRoomvoImageModule } from './module/campaign-roomvo-image/campaign-roomvo-image.module';
import { CampaignRoomvoVoteModule } from './module/campaign-roomvo-vote/campaign-roomvo-vote.module';
import { CampaignSubscriptionModule } from './module/campaign-subscription/campaign-subscription.module';
import { CampaignUefaEuroSubscriberModule } from './module/campaign-uefa-euro-subscriber/campaign-uefa-euro-subscriber.module';
import { CampaignUefaEuroSubscriberHistoryModule } from './module/campaign-uefa-euro-subscriber-history/campaign-uefa-euro-subscriber-history.module';
import { CampaignVotingImageModule } from './module/campaign-voting-image/campaign-voting-image.module';
import { CarpetFeatureModule } from './module/carpet-feature/carpet-feature.module';
import { CarpetFeatureUserModule } from './module/carpet-feature-user/carpet-feature-user.module';
import { CarpetMaterialModule } from './module/carpet-material/carpet-material.module';
import { CarpetShapeModule } from './module/carpet-shape/carpet-shape.module';
import { CarpetSizeModule } from './module/carpet-size/carpet-size.module';
import { CarpetUsagePlaceModule } from './module/carpet-usage-place/carpet-usage-place.module';
import { CarpetUsagePlaceInvoiceProductModule } from './module/carpet-usage-place-invoice-product/carpet-usage-place-invoice-product.module';
import { CarpetUsagePlaceUserModule } from './module/carpet-usage-place-user/carpet-usage-place-user.module';
import { ChaparSettlementStatusModule } from './module/chapar-settlement-status/chapar-settlement-status.module';
import { ChaparTrackingHistoryModule } from './module/chapar-tracking-history/chapar-tracking-history.module';
import { CitiesSepidarModule } from './module/cities-sepidar/cities-sepidar.module';
import { CityModule } from './module/city/city.module';
import { City2Module } from './module/city2/city2.module';
import { ColorModule } from './module/color/color.module';
import { ColorCategoryModule } from './module/color-category/color-category.module';
import { ColorCategoryDetailModule } from './module/color-category-detail/color-category-detail.module';
import { ColorCategorySubproductModule } from './module/color-category-subproduct/color-category-subproduct.module';
import { ConfigModule } from './module/config/config.module';
import { ContactFormModule } from './module/contact-form/contact-form.module';
import { ContactFormHistoryModule } from './module/contact-form-history/contact-form-history.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'mydatabase',
      autoLoadEntities: true,
      synchronize: false,
      retryAttempts: 0, // Disable retry
      retryDelay: 0, // No delay
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
