import { Injectable } from '@nestjs/common';
import { CreateWalletInput } from '@/modules/wallet/dto/create-wallet.input';
import { UpdateWalletInput } from '@/modules/wallet/dto/update-wallet.input';
import { EntityManager, Repository, UpdateResult } from 'typeorm';
import { Wallet } from '@/modules/wallet/entities/wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UpdateWalletProvider {
  constructor(
    /**
     * inject walletRepository
     */
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
  ) {}

  public async updateWallet(
    updateWalletInput: UpdateWalletInput,
    walletId: number,
    manager?: EntityManager,
  ) {
    let wallet: UpdateResult | null = null;
    //create wallet if not exist or update it if exist
    const {
      userId,
      userBlocked = 0,
      modemaBlocked = 0,
      withdrawable = 0,
      notUsableForLowTotalPrices = 0,
    } = updateWalletInput;
    const walletObject: CreateWalletInput = {
      userId,
      userBlocked,
      modemaBlocked,
      notUsableForLowTotalPrices,
      withdrawable,
    };

    const walletRepository = manager
      ? manager.getRepository(Wallet)
      : this.walletRepository;
    try {
      wallet = await walletRepository.update(walletId, walletObject);
    } catch (error) {
      throw new Error(error);
    }

    return wallet;
  }
}
