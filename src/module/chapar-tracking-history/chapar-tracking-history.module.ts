import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ChaparTrackingHistory } from './entities/chapar-tracking-history.entity';
import { ChaparTrackingHistory as ChaparTrackingHistoryGraphQL } from './domain/chapar-tracking-history';
import { CreateChaparTrackingHistoryInput } from './dto/create-chapar-tracking-history.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ChaparTrackingHistory])],
      resolvers: [
        {
          EntityClass: ChaparTrackingHistory,
          DTOClass: ChaparTrackingHistoryGraphQL,
          CreateDTOClass: CreateChaparTrackingHistoryInput,
        },
      ],
    }),
  ],
})
export class ChaparTrackingHistoryModule {}
