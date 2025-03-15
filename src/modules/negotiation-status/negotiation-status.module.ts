import { Module } from '@nestjs/common';
import { NegotiationStatusService } from './negotiation-status.service';
import { NegotiationStatusResolver } from './negotiation-status.resolver';
import { NegotiationStatus } from '@/modules/negotiation-status/entities/negotiation-status.entity';
import { NegotiationStatus as NegotiationStatusGraphQL } from '@/modules/negotiation-status/domain/negotiation-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateNegotiationStatusInput } from '@/modules/negotiation-status/dto/create-negotiation-status.input';

@Module({
  providers: [NegotiationStatusResolver, NegotiationStatusService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([NegotiationStatus])],
      resolvers: [
        {
          EntityClass: NegotiationStatus,
          DTOClass: NegotiationStatusGraphQL,
          CreateDTOClass: CreateNegotiationStatusInput,
        },
      ],
    }),
  ],
})
export class NegotiationStatusModule {}
