import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Wallet } from '@/modules/wallet/entities/wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWalletInput } from '@/modules/wallet/dto/create-wallet.input';
import { RuntimeException } from '@nestjs/core/errors/exceptions';

@Injectable()
export class CreateWalletProvider {
  constructor(
    /**
     * Inject walletRepository
     */
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
  ) {}

  public async createWallet(createWalletDto: CreateWalletInput) {
    let wallet: Wallet | null = null;

    try {
      wallet = await this.walletRepository.findOne({
        where: { userId: createWalletDto.userId },
      });
    } catch (error) {
      throw new RuntimeException(error);
    }
    
    if (wallet) {
      return true;
    }
    wallet = this.walletRepository.create(createWalletDto);

    try {
      await this.walletRepository.save(wallet);
    } catch (error) {
      console.log('error');
      throw new RuntimeException(error);
    }
    return true;
  }
}
