import { Module } from '@nestjs/common';
import { NegotiationHistoryService } from './negotiation-history.service';
import { NegotiationHistoryResolver } from './negotiation-history.resolver';
import { NegotiationHistory } from '@/modules/negotiation-history/entities/negotiation-history.entity';
import { NegotiationHistory as NegotiationHistoryGraphQL } from '@/modules/negotiation-history/domain/negotiation-history';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateNegotiationHistoryInput } from '@/modules/negotiation-history/dto/create-negotiation-history.input';

@Module({
  providers: [NegotiationHistoryResolver, NegotiationHistoryService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([NegotiationHistory])],
      resolvers: [
        {
          EntityClass: NegotiationHistory,
          DTOClass: NegotiationHistoryGraphQL,
          CreateDTOClass: CreateNegotiationHistoryInput,
        },
      ],
    }),
  ],
})
export class NegotiationHistoryModule {}
