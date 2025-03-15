import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CampaignUefaEuroSubscriberHistory } from './entities/campaign-uefa-euro-subscriber-history.entity';
import { CampaignUefaEuroSubscriberHistory as CampaignUefaEuroSubscriberHistoryGraphQL } from './domain/campaign-uefa-euro-subscriber-history';
import { CreateCampaignUefaEuroSubscriberHistoryInput } from './dto/create-campaign-uefa-euro-subscriber-history.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([
          CampaignUefaEuroSubscriberHistory,
        ]),
      ],
      resolvers: [
        {
          EntityClass: CampaignUefaEuroSubscriberHistory,
          DTOClass: CampaignUefaEuroSubscriberHistoryGraphQL,
          CreateDTOClass: CreateCampaignUefaEuroSubscriberHistoryInput,
        },
      ],
    }),
  ],
})
export class CampaignUefaEuroSubscriberHistoryModule {}
