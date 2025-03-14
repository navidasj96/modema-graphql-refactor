import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CampaignFreeOfferSize } from './entities/campaign-free-offer-size.entity';
import { CampaignFreeOfferSize as CampaignFreeOfferSizeGraphQL } from './domain/campaign-free-offer-size';
import { CreateCampaignFreeOfferSizeInput } from './dto/create-campaign-free-offer-size.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CampaignFreeOfferSize])],
      resolvers: [
        {
          EntityClass: CampaignFreeOfferSize,
          DTOClass: CampaignFreeOfferSizeGraphQL,
          CreateDTOClass: CreateCampaignFreeOfferSizeInput,
        },
      ],
    }),
  ],
})
export class CampaignFreeOfferSizeModule {}
