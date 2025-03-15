import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CampaignGoldCoinSub } from './entities/campaign-gold-coin-sub.entity';
import { CampaignGoldCoinSub as CampaignGoldCoinSubGraphQL } from './domain/campaign-gold-coin-sub';
import { CreateCampaignGoldCoinSubInput } from './dto/create-campaign-gold-coin-sub.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CampaignGoldCoinSub])],
      resolvers: [
        {
          EntityClass: CampaignGoldCoinSub,
          DTOClass: CampaignGoldCoinSubGraphQL,
          CreateDTOClass: CreateCampaignGoldCoinSubInput,
        },
      ],
    }),
  ],
})
export class CampaignGoldCoinSubModule {}
