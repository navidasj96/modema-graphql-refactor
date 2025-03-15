import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CampaignInstagramFollow as CampaignInstagramFollowGraphQL } from './domain/campaign-instagram-follow';
import { CampaignInstagramFollow } from './entities/campaign-instagram-follow.entity';
import { CreateCampaignInstagramFollowInput } from './dto/create-campaign-instagram-follow.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CampaignInstagramFollow])],
      resolvers: [
        {
          EntityClass: CampaignInstagramFollow,
          DTOClass: CampaignInstagramFollowGraphQL,
          CreateDTOClass: CreateCampaignInstagramFollowInput,
        },
      ],
    }),
  ],
})
export class CampaignInstagramFollowModule {}
