import { Injectable } from '@nestjs/common';
import { CreateWalletHistoryInput } from './dto/create-wallet-history.input';
import { UpdateWalletHistoryInput } from './dto/update-wallet-history.input';
import { CreateWalletHistoryProvider } from '@/modules/wallet-history/providers/create-wallet-history.provider';
import { EntityManager } from 'typeorm';

@Injectable()
export class WalletHistoryService {
  constructor(
    /**
     * inject createWalletHistoryProvider
     */
    private readonly createWalletHistoryProvider: CreateWalletHistoryProvider,
  ) {}

  async create(
    createWalletHistoryInput: CreateWalletHistoryInput,
    manager?: EntityManager,
  ) {
    return await this.createWalletHistoryProvider.createWalletHistory(
      createWalletHistoryInput,
      manager,
    );
  }

  findAll() {
    return `This action returns all walletHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} walletHistory`;
  }

  update(id: number, updateWalletHistoryInput: UpdateWalletHistoryInput) {
    return `This action updates a #${id} walletHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} walletHistory`;
  }
}
