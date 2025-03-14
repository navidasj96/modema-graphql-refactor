import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CampaignVotingImageUser } from './entities/campaign-voting-image-user.entity';
import { CampaignVotingImageUser as CampaignVotingImageUserGraphQL } from './domain/campaign-voting-image-user';
import { CreateCampaignVotingImageUserInput } from './dto/create-campaign-voting-image-user.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CampaignVotingImageUser])],
      resolvers: [
        {
          EntityClass: CampaignVotingImageUser,
          DTOClass: CampaignVotingImageUserGraphQL,
          CreateDTOClass: CreateCampaignVotingImageUserInput,
        },
      ],
    }),
  ],
})
export class CampaignVotingImageUserModule {}
