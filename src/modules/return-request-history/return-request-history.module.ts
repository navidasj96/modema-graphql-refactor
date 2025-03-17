import { Module } from '@nestjs/common';
import { ReturnRequestHistoryService } from './return-request-history.service';
import { ReturnRequestHistoryResolver } from './return-request-history.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnRequestHistory } from '@/modules/return-request-history/entities/return-request-history.entity';
import { ReturnRequestHistory as ReturnRequestHistoryGraphQL } from '@/modules/return-request-history/domain/return-request-history';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnRequestHistoryInput } from '@/modules/return-request-history/dto/create-return-request-history.input';

@Module({
  providers: [ReturnRequestHistoryResolver, ReturnRequestHistoryService],
  imports: [
    TypeOrmModule.forFeature([ReturnRequestHistory]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReturnRequestHistory])],
      resolvers: [
        {
          EntityClass: ReturnRequestHistory,
          DTOClass: ReturnRequestHistoryGraphQL,
          CreateDTOClass: CreateReturnRequestHistoryInput,
        },
      ],
    }),
  ],
})
export class ReturnRequestHistoryModule {}
