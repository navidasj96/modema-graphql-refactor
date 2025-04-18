import { Injectable } from '@nestjs/common';
import { CreateWalletInput } from './dto/create-wallet.input';
import { UpdateWalletInput } from './dto/update-wallet.input';
import { CreateWalletProvider } from '@/modules/wallet/providers/create-wallet.provider';

@Injectable()
export class WalletService {
  constructor(
    /**
     * Inject createWalletProvider
     */
    private readonly createWalletProvider: CreateWalletProvider,
  ) {}

  async create(createWalletDto: CreateWalletInput) {
    return await this.createWalletProvider.createWallet(createWalletDto);
  }

  findAll() {
    return `This action returns all wallet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wallet`;
  }

  update(id: number, updateWalletInput: UpdateWalletInput) {
    return `This action updates a #${id} wallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
