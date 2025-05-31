import { Injectable } from '@nestjs/common';
import { CreateWalletInput } from './dto/create-wallet.input';
import { UpdateWalletInput } from './dto/update-wallet.input';
import { CreateOrGetWalletProvider } from '@/modules/wallet/providers/create-or-get-wallet.provider';
import { TransactionService } from '@/modules/transaction/transaction.service';
import { WalletHistoryService } from '@/modules/wallet-history/wallet-history.service';
import { UpdateWalletProvider } from '@/modules/wallet/providers/update-wallet.provider';
import { CreateTransactionInput } from '@/modules/transaction/dto/create-transaction.input';
import { CreateWalletHistoryInput } from '@/modules/wallet-history/dto/create-wallet-history.input';
import { DataSource, FindOneOptions, Repository } from 'typeorm';
import { UpdateWalletResponseDto } from '@/modules/wallet/dto/update-wallet-response.dto';
import LaravelModelNames from '@/utils/laravel-model-names';
import { read } from 'fs';
import { Wallet } from '@/modules/wallet/entities/wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WalletService {
  constructor(
    /**
     * Inject createWalletProvider
     */
    private readonly createWalletProvider: CreateOrGetWalletProvider,
    /**
     * inject TransactionService
     */
    private readonly transactionService: TransactionService,
    /**
     * inject walletHistoryService
     */
    private readonly walletHistoryService: WalletHistoryService,
    /**
     * inject updateWalletProvider
     */
    private readonly updateWalletProvider: UpdateWalletProvider,
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource,
    /**
     * inject walletRepository
     */
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>
  ) {}

  async create(createWalletDto: CreateWalletInput) {
    return await this.createWalletProvider.createOrGetWallet(createWalletDto);
  }

  findAll() {
    return `This action returns all wallet`;
  }

  async findOne(options: FindOneOptions<Wallet>) {
    return await this.walletRepository.findOne(options);
  }

  async update(
    updateWalletInput: UpdateWalletInput
  ): Promise<UpdateWalletResponseDto> {
    //use typeorm queryRunner
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const manager = queryRunner.manager;

    try {
      const {
        userId,
        userBlocked = 0,
        modemaBlocked = 0,
        withdrawable = 0,
        notUsableForLowTotalPrices = 0,
        description,
      } = updateWalletInput;
      const walletObject: CreateWalletInput = {
        userId,
        userBlocked,
        modemaBlocked,
        notUsableForLowTotalPrices,
        withdrawable,
      };
      //create or get wallet
      const wallet = await this.createWalletProvider.createOrGetWallet(
        walletObject,
        manager
      );

      //update wallet with new values
      await this.updateWalletProvider.updateWallet(
        walletObject,
        wallet.id,
        manager
      );

      //create new Transaction and save it
      const transactionObject: CreateTransactionInput = {
        withdrawable,
        modemaBlocked,
        userBlocked,
        userId,
        amount: withdrawable + modemaBlocked + userBlocked,
        modelId: userId,
        modelType: LaravelModelNames.user,
        description,
      };
      const transaction = await this.transactionService.create(
        transactionObject,
        manager
      );

      //create new wallet history and save it
      const walletHistoryObject: CreateWalletHistoryInput = {
        walletId: wallet.id,
        withdrawable,
        modemaBlocked,
        userBlocked,
        transactionId: transaction.id,
        createdBy: userId,
      };

      await this.walletHistoryService.create(walletHistoryObject, manager);
      // throw new Error('Simulated failure to test rollback');
      await queryRunner.commitTransaction();

      return { walletId: wallet.id };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new Error(error);
    } finally {
      await queryRunner.release();
    }
  }

  remove(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
