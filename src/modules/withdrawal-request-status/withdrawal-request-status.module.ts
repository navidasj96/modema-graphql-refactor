import { Module } from '@nestjs/common';
import { WithdrawalRequestStatusService } from './withdrawal-request-status.service';
import { WithdrawalRequestStatusResolver } from './withdrawal-request-status.resolver';
import { WithdrawalRequestStatus } from '@/modules/withdrawal-request-status/entities/withdrawal-request-status.entity';
import { WithdrawalRequestStatus as WithdrawalRequestStatusGraphQL } from '@/modules/withdrawal-request-status/domain/withdrawal-request-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateWithdrawalRequestStatusInput } from '@/modules/withdrawal-request-status/dto/create-withdrawal-request-status.input';

@Module({
  providers: [WithdrawalRequestStatusResolver, WithdrawalRequestStatusService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([WithdrawalRequestStatus])],
      resolvers: [
        {
          EntityClass: WithdrawalRequestStatus,
          DTOClass: WithdrawalRequestStatusGraphQL,
          CreateDTOClass: CreateWithdrawalRequestStatusInput,
        },
      ],
    }),
  ],
})
export class WithdrawalRequestStatusModule {}
