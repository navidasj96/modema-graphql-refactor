import { Module } from '@nestjs/common';
import { SpecialOfferService } from './special-offer.service';
import { SpecialOfferResolver } from './special-offer.resolver';
import { SpecialOffer } from '@/modules/special-offer/entities/special-offer.entity';
import { SpecialOffer as SpecialOfferGraphQL } from '@/modules/special-offer/domain/special-offer';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSpecialOfferInput } from '@/modules/special-offer/dto/create-special-offer.input';

@Module({
  providers: [SpecialOfferResolver, SpecialOfferService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SpecialOffer])],
      resolvers: [
        {
          EntityClass: SpecialOffer,
          DTOClass: SpecialOfferGraphQL,
          CreateDTOClass: CreateSpecialOfferInput,
        },
      ],
    }),
  ],
})
export class SpecialOfferModule {}
