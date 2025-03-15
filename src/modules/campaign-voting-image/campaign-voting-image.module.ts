import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CampaignVotingImage } from './entities/campaign-voting-image.entity';
import { CampaignVotingImage as CampaignVotingImageGraphQL } from './domain/campaign-voting-image';
import { CreateCampaignVotingImageInput } from './dto/create-campaign-voting-image.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CampaignVotingImage])],
      resolvers: [
        {
          EntityClass: CampaignVotingImage,
          DTOClass: CampaignVotingImageGraphQL,
          CreateDTOClass: CreateCampaignVotingImageInput,
        },
      ],
    }),
  ],
})
export class CampaignVotingImageModule {}
