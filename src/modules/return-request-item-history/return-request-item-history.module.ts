import { Module } from '@nestjs/common';
import { ReturnRequestItemHistoryService } from './return-request-item-history.service';
import { ReturnRequestItemHistoryResolver } from './return-request-item-history.resolver';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/entities/return-request-item-history.entity';
import { ReturnRequestItemHistory as ReturnRequestItemHistoryGraphQL } from '@/modules/return-request-item-history/domain/return-request-item-history';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnRequestItemHistoryInput } from '@/modules/return-request-item-history/dto/create-return-request-item-history.input';

@Module({
  providers: [
    ReturnRequestItemHistoryResolver,
    ReturnRequestItemHistoryService,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([ReturnRequestItemHistory]),
      ],
      resolvers: [
        {
          EntityClass: ReturnRequestItemHistory,
          DTOClass: ReturnRequestItemHistoryGraphQL,
          CreateDTOClass: CreateReturnRequestItemHistoryInput,
        },
      ],
    }),
  ],
})
export class ReturnRequestItemHistoryModule {}
