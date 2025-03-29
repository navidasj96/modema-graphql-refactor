import { Resolver } from '@nestjs/graphql';
import { TransactionService } from './transaction.service';
import { Transaction } from '@/modules/transaction/domain/transaction';

@Resolver(() => Transaction)
export class TransactionResolver {
  constructor(private readonly transactionService: TransactionService) {}
}
