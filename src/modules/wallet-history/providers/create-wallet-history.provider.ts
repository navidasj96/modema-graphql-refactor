import { Injectable } from '@nestjs/common';
import { CreateWalletHistoryInput } from '@/modules/wallet-history/dto/create-wallet-history.input';
import { InjectRepository } from '@nestjs/typeorm';
import { WalletHistory } from '@/modules/wallet-history/entities/wallet-history.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CreateWalletHistoryProvider {
  constructor(
    /**
     * Inject walletHistoryRepository
     */
    @InjectRepository(WalletHistory)
    private readonly walletHistoryRepository: Repository<WalletHistory>,
  ) {}

  public async createWalletHistory(
    createWalletHistoryInput: CreateWalletHistoryInput,
    manager?: EntityManager,
  ) {
    const walletHistoryRepository = manager
      ? manager.getRepository(WalletHistory)
      : this.walletHistoryRepository;
    const newWalletHistory = walletHistoryRepository.create(
      createWalletHistoryInput,
    );
    try {
      await walletHistoryRepository.save(newWalletHistory);
    } catch (error) {
      throw new Error(error);
    }
    return newWalletHistory;
  }
}
