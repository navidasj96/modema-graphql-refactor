import { Module } from '@nestjs/common';
import { IncredibleOfferService } from './incredible-offer.service';
import { IncredibleOfferResolver } from './incredible-offer.resolver';
import { IncredibleOffer } from '@/modules/incredible-offer/entities/incredible-offer.entity';
import { IncredibleOffer as IncredibleOfferGraphaQL } from '@/modules/incredible-offer/domain/incredible-offer';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateIncredibleOfferInput } from '@/modules/incredible-offer/dto/create-incredible-offer.input';

@Module({
  providers: [IncredibleOfferResolver, IncredibleOfferService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([IncredibleOffer])],
      resolvers: [
        {
          EntityClass: IncredibleOffer,
          DTOClass: IncredibleOfferGraphaQL,
          CreateDTOClass: CreateIncredibleOfferInput,
        },
      ],
    }),
  ],
})
export class IncredibleOfferModule {}
