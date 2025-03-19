import { Module } from '@nestjs/common';
import { NegotiationStepService } from './negotiation-step.service';
import { NegotiationStepResolver } from './negotiation-step.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NegotiationStep } from '@/modules/negotiation-step/entities/negotiation-step.entity';
import { NegotiationStep as NegotiationStepGraphQL } from '@/modules/negotiation-step/domain/negotiation-step';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateNegotiationStepInput } from '@/modules/negotiation-step/dto/create-negotiation-step.input';

@Module({
  providers: [NegotiationStepResolver, NegotiationStepService],
  imports: [
    TypeOrmModule.forFeature([NegotiationStep]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([NegotiationStep])],
      resolvers: [
        {
          EntityClass: NegotiationStep,
          DTOClass: NegotiationStepGraphQL,
          CreateDTOClass: CreateNegotiationStepInput,
        },
      ],
    }),
  ],
})
export class NegotiationStepModule {}
