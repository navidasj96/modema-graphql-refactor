import { Module } from '@nestjs/common';
import { NegotiationTypeService } from './negotiation-type.service';
import { NegotiationTypeResolver } from './negotiation-type.resolver';
import { NegotiationType } from '@/modules/negotiation-type/entities/negotiation-type.entity';
import { NegotiationType as NegotiationTypeGraphQL } from '@/modules/negotiation-type/domain/negotiation-type';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateNegotiationTypeInput } from '@/modules/negotiation-type/dto/create-negotiation-type.input';

@Module({
  providers: [NegotiationTypeResolver, NegotiationTypeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([NegotiationType])],
      resolvers: [
        {
          EntityClass: NegotiationType,
          DTOClass: NegotiationTypeGraphQL,
          CreateDTOClass: CreateNegotiationTypeInput,
        },
      ],
    }),
  ],
})
export class NegotiationTypeModule {}
