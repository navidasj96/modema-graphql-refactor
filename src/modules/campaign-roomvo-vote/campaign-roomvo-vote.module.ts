import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CampaignRoomvoVote } from './entities/campaign-roomvo-vote.entity';
import { CampaignRoomvoVote as CampaignRoomvoVoteGraphQL } from './domain/campaign-roomvo-vote';
import { CreateCampaignRoomvoVoteInput } from './dto/create-campaign-roomvo-vote.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CampaignRoomvoVote])],
      resolvers: [
        {
          EntityClass: CampaignRoomvoVote,
          DTOClass: CampaignRoomvoVoteGraphQL,
          CreateDTOClass: CreateCampaignRoomvoVoteInput,
        },
      ],
    }),
  ],
})
export class CampaignRoomvoVoteModule {}
