import { Injectable } from '@nestjs/common';
import { CreateWalletGiftChargeInput } from './dto/create-wallet-gift-charge.input';
import { UpdateWalletGiftChargeInput } from './dto/update-wallet-gift-charge.input';

@Injectable()
export class WalletGiftChargeService {
  create(createWalletGiftChargeInput: CreateWalletGiftChargeInput) {
    return 'This action adds a new walletGiftCharge';
  }

  findAll() {
    return `This action returns all walletGiftCharge`;
  }

  findOne(id: number) {
    return `This action returns a #${id} walletGiftCharge`;
  }

  update(id: number, updateWalletGiftChargeInput: UpdateWalletGiftChargeInput) {
    return `This action updates a #${id} walletGiftCharge`;
  }

  remove(id: number) {
    return `This action removes a #${id} walletGiftCharge`;
  }
}
