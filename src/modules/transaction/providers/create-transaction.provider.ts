import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Transaction } from '@/modules/transaction/entities/transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTransactionInput } from '@/modules/transaction/dto/create-transaction.input';
import { RuntimeException } from '@nestjs/core/errors/exceptions';

@Injectable()
export class CreateTransactionProvider {
  constructor(
    /**
     * Inject transaction repository
     */
    @InjectRepository(Transaction)
    private readonly transactionRepo: Repository<Transaction>,
  ) {}

  public async createTransaction(
    createTransactionInput: CreateTransactionInput,
  ) {
    const {
      withdrawable = 0,
      modemaBlocked = 0,
      userBlocked = 0,
      ...rest
    } = createTransactionInput;

    const transactionObject: CreateTransactionInput = {
      ...rest,
      withdrawable,
      modemaBlocked,
      userBlocked,
      amount: withdrawable + modemaBlocked + userBlocked,
    };

    const transaction = this.transactionRepo.create(transactionObject);

    try {
      await this.transactionRepo.save(transaction);
    } catch (error) {
      throw new RuntimeException(error);
    }

    return transaction.id;
  }
}
