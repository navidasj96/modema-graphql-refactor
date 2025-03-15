import { Module } from '@nestjs/common';
import { ImpersonateHistoryService } from './impersonate-history.service';
import { ImpersonateHistoryResolver } from './impersonate-history.resolver';
import { ImpersonateHistory } from '@/modules/impersonate-history/entities/impersonate-history.entity';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ImpersonateHistory as ImpersonateHistoryGraphQL } from '@/modules/impersonate-history/domain/impersonate-history';
import { CreateImpersonateHistoryInput } from '@/modules/impersonate-history/dto/create-impersonate-history.input';

@Module({
  providers: [ImpersonateHistoryResolver, ImpersonateHistoryService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ImpersonateHistory])],
      resolvers: [
        {
          EntityClass: ImpersonateHistory,
          DTOClass: ImpersonateHistoryGraphQL,
          CreateDTOClass: CreateImpersonateHistoryInput,
        },
      ],
    }),
  ],
})
export class ImpersonateHistoryModule {}
