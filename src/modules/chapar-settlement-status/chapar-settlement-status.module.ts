import { Module } from '@nestjs/common';
import { ChaparSettlementStatusService } from './chapar-settlement-status.service';
import { ChaparSettlementStatusResolver } from './chapar-settlement-status.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ChaparSettlementStatus } from './entities/chapar-settlement-status.entity';
import { ChaparSettlementStatus as ChaparSettlementStatusGraphQL } from './domain/chapar-settlement-status';
import { CreateChaparSettlementStatusInput } from './dto/create-chapar-settlement-status.input';

@Module({
  providers: [ChaparSettlementStatusResolver, ChaparSettlementStatusService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ChaparSettlementStatus])],
      resolvers: [
        {
          EntityClass: ChaparSettlementStatus,
          DTOClass: ChaparSettlementStatusGraphQL,
          CreateDTOClass: CreateChaparSettlementStatusInput,
        },
      ],
    }),
  ],
})
export class ChaparSettlementStatusModule {}
