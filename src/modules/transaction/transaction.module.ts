import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from '@/modules/transaction/entities/transaction.entity';
import { Transaction as TransactionGraphQL } from '@/modules/transaction/domain/transaction';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateTransactionInput } from '@/modules/transaction/dto/create-transaction.input';
import { CreateTransactionProvider } from '@/modules/transaction/providers/create-transaction.provider';

@Module({
  providers: [
    TransactionResolver,
    TransactionService,
    CreateTransactionProvider,
  ],
  imports: [
    TypeOrmModule.forFeature([Transaction]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Transaction])],
      resolvers: [
        {
          EntityClass: Transaction,
          DTOClass: TransactionGraphQL,
          CreateDTOClass: CreateTransactionInput,
        },
      ],
    }),
  ],
  exports: [TransactionService],
})
export class TransactionModule {}
