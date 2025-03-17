import { Module } from '@nestjs/common';
import { WithdrawalRequestService } from './withdrawal-request.service';
import { WithdrawalRequestResolver } from './withdrawal-request.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WithdrawalRequest } from '@/modules/withdrawal-request/entities/withdrawal-request.entity';
import { WithdrawalRequest as WithdrawalRequestGraphQL } from '@/modules/withdrawal-request/domain/withdrawal-request';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateWithdrawalRequestInput } from '@/modules/withdrawal-request/dto/create-withdrawal-request.input';

@Module({
  providers: [WithdrawalRequestResolver, WithdrawalRequestService],
  imports: [
    TypeOrmModule.forFeature([WithdrawalRequest]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([WithdrawalRequest])],
      resolvers: [
        {
          EntityClass: WithdrawalRequest,
          DTOClass: WithdrawalRequestGraphQL,
          CreateDTOClass: CreateWithdrawalRequestInput,
        },
      ],
    }),
  ],
})
export class WithdrawalRequestModule {}
