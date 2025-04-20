import { Injectable } from '@nestjs/common';
import { CreateWalletHistoryInput } from './dto/create-wallet-history.input';
import { UpdateWalletHistoryInput } from './dto/update-wallet-history.input';
import { CreateWalletHistoryProvider } from '@/modules/wallet-history/providers/create-wallet-history.provider';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WalletHistory } from '@/modules/wallet-history/entities/wallet-history.entity';

@Injectable()
export class WalletHistoryService {
  constructor(
    /**
     * inject createWalletHistoryProvider
     */
    private readonly createWalletHistoryProvider: CreateWalletHistoryProvider,
    /**
     * inject walletHistoryRepository :
     */
    @InjectRepository(WalletHistory)
    private readonly walletHistoryRepository: Repository<WalletHistory>,
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

  async walletForTransactionHistory(id: number) {
    return await this.walletHistoryRepository.find({
      where: { createdBy2: { id: id } },
      relations: ['createdBy2', 'transaction'],
    });
  }
}
