import { Injectable } from '@nestjs/common';
import { CreateWalletHistoryInput } from './dto/create-wallet-history.input';
import { UpdateWalletHistoryInput } from './dto/update-wallet-history.input';

@Injectable()
export class WalletHistoryService {
  create(createWalletHistoryInput: CreateWalletHistoryInput) {
    return 'This action adds a new walletHistory';
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
