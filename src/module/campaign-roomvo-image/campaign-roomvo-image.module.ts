import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CampaignRoomvoImage } from './entities/campaign-roomvo-image.entity';
import { CampaignRoomvoImage as CampaignRoomvoImageGraphQL } from './domain/campaign-roomvo-image';
import { CreateCampaignRoomvoImageInput } from './dto/create-campaign-roomvo-image.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CampaignRoomvoImage])],
      resolvers: [
        {
          EntityClass: CampaignRoomvoImage,
          DTOClass: CampaignRoomvoImageGraphQL,
          CreateDTOClass: CreateCampaignRoomvoImageInput,
        },
      ],
    }),
  ],
})
export class CampaignRoomvoImageModule {}
