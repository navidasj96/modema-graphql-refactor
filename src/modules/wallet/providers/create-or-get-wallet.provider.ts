import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Wallet } from '@/modules/wallet/entities/wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWalletInput } from '@/modules/wallet/dto/create-wallet.input';
import { RuntimeException } from '@nestjs/core/errors/exceptions';

@Injectable()
export class CreateOrGetWalletProvider {
  constructor(
    /**
     * Inject walletRepository
     */
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>
  ) {}

  public async createOrGetWallet(
    createWalletDto: CreateWalletInput,
    manager?: EntityManager
  ) {
    let wallet: Wallet | null = null;
    const walletRepository = manager
      ? manager.getRepository(Wallet)
      : this.walletRepository;
    try {
      wallet = await walletRepository.findOne({
        where: { userId: createWalletDto.userId },
      });
    } catch (error) {
      throw new RuntimeException(error);
    }

    if (wallet) {
      return wallet;
    }
    wallet = walletRepository.create(createWalletDto);

    try {
      await walletRepository.save(wallet);
    } catch (error) {
      console.log('error');
      throw new RuntimeException(error);
    }
    return wallet;
  }
}
