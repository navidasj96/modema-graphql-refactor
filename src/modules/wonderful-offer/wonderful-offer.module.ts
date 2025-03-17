import { Module } from '@nestjs/common';
import { WonderfulOfferService } from './wonderful-offer.service';
import { WonderfulOfferResolver } from './wonderful-offer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WonderfulOffer } from '@/modules/wonderful-offer/entities/wonderful-offer.entity';
import { WonderfulOffer as WonderfulOfferGraphQL } from '@/modules/wonderful-offer/domain/wonderful-offer';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateWonderfulOfferInput } from '@/modules/wonderful-offer/dto/create-wonderful-offer.input';

@Module({
  providers: [WonderfulOfferResolver, WonderfulOfferService],
  imports: [
    TypeOrmModule.forFeature([WonderfulOffer]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([WonderfulOffer])],
      resolvers: [
        {
          EntityClass: WonderfulOffer,
          DTOClass: WonderfulOfferGraphQL,
          CreateDTOClass: CreateWonderfulOfferInput,
        },
      ],
    }),
  ],
})
export class WonderfulOfferModule {}
