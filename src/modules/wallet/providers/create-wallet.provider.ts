import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Wallet } from '@/modules/wallet/entities/wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWalletInput } from '@/modules/wallet/dto/create-wallet.input';
import { UserService } from '@/modules/user/user.service';
import { RuntimeException } from '@nestjs/core/errors/exceptions';

@Injectable()
export class CreateWalletProvider {
  constructor(
    /**
     * Inject walletRepository
     */
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
    /**
     * Inject UserSerive
     */
    private readonly userService: UserService,
  ) {}

  public async createWallet(createWalletDto: CreateWalletInput) {
    let wallet: Wallet | undefined = undefined;

    try {
      const user = await this.userService.findOne(createWalletDto.userId);
      wallet = user ? user.wallets : undefined;
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
      throw new RuntimeException(error);
    }
    return true;
  }
}
