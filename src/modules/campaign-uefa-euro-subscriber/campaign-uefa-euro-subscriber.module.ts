import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CampaignUefaEuroSubscriber } from './entities/campaign-uefa-euro-subscriber.entity';
import { CampaignUefaEuroSubscriber as CampaignUefaEuroSubscriberGraphQL } from './domain/campaign-uefa-euro-subscriber';
import { CreateCampaignUefaEuroSubscriberInput } from './dto/create-campaign-uefa-euro-subscriber.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([CampaignUefaEuroSubscriber]),
      ],
      resolvers: [
        {
          EntityClass: CampaignUefaEuroSubscriber,
          DTOClass: CampaignUefaEuroSubscriberGraphQL,
          CreateDTOClass: CreateCampaignUefaEuroSubscriberInput,
        },
      ],
    }),
  ],
})
export class CampaignUefaEuroSubscriberModule {}
