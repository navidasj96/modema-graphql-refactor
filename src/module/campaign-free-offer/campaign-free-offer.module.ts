import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CampaignFreeOffer } from './entities/campaign-free-offer.entity';
import { CampaignFreeOffer as CampaignFreeOfferGraphQL } from './domain/campaign-free-offer';
import { CreateCampaignFreeOfferInput } from './dto/create-campaign-free-offer.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CampaignFreeOffer])],
      resolvers: [
        {
          EntityClass: CampaignFreeOffer,
          DTOClass: CampaignFreeOfferGraphQL,
          CreateDTOClass: CreateCampaignFreeOfferInput,
        },
      ],
    }),
  ],
})
export class CampaignFreeOfferModule {}
