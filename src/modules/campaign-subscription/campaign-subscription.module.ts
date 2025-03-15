import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CampaignSubscription } from './entities/campaign-subscription.entity';
import { CampaignSubscription as CampaignSubscriptionGraphQL } from './domain/campaign-subscription';
import { CreateCampaignSubscriptionInput } from './dto/create-campaign-subscription.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CampaignSubscription])],
      resolvers: [
        {
          EntityClass: CampaignSubscription,
          DTOClass: CampaignSubscriptionGraphQL,
          CreateDTOClass: CreateCampaignSubscriptionInput,
        },
      ],
    }),
  ],
})
export class CampaignSubscriptionModule {}
