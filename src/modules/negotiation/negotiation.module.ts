import { Module } from '@nestjs/common';
import { NegotiationService } from './negotiation.service';
import { NegotiationResolver } from './negotiation.resolver';
import { Negotiation } from '@/modules/negotiation/entities/negotiation.entity';
import { Negotiation as NegotiationGraphQL } from '@/modules/negotiation/domain/negotiation';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateNegotiationInput } from '@/modules/negotiation/dto/create-negotiation.input';

@Module({
  providers: [NegotiationResolver, NegotiationService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Negotiation])],
      resolvers: [
        {
          EntityClass: Negotiation,
          DTOClass: NegotiationGraphQL,
          CreateDTOClass: CreateNegotiationInput,
        },
      ],
    }),
  ],
})
export class NegotiationModule {}
