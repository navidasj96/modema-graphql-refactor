import { Injectable } from '@nestjs/common';
import { CreateTransactionInput } from './dto/create-transaction.input';
import { UpdateTransactionInput } from './dto/update-transaction.input';
import { CreateTransactionProvider } from '@/modules/transaction/providers/create-transaction.provider';
import { EntityManager } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    /**
     * inject createTranscationProvider
     */
    private readonly createTransactionProvider: CreateTransactionProvider
  ) {}

  async create(
    createTransactionInput: CreateTransactionInput,
    manager?: EntityManager
  ) {
    return this.createTransactionProvider.createTransaction(
      createTransactionInput,
      manager
    );
  }

  findAll() {
    return `This action returns all transaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionInput: UpdateTransactionInput) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
