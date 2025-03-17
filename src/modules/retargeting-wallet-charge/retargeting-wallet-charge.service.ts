import { Injectable } from '@nestjs/common';
import { CreateRetargetingWalletChargeInput } from './dto/create-retargeting-wallet-charge.input';
import { UpdateRetargetingWalletChargeInput } from './dto/update-retargeting-wallet-charge.input';

@Injectable()
export class RetargetingWalletChargeService {
  create(createRetargetingWalletChargeInput: CreateRetargetingWalletChargeInput) {
    return 'This action adds a new retargetingWalletCharge';
  }

  findAll() {
    return `This action returns all retargetingWalletCharge`;
  }

  findOne(id: number) {
    return `This action returns a #${id} retargetingWalletCharge`;
  }

  update(id: number, updateRetargetingWalletChargeInput: UpdateRetargetingWalletChargeInput) {
    return `This action updates a #${id} retargetingWalletCharge`;
  }

  remove(id: number) {
    return `This action removes a #${id} retargetingWalletCharge`;
  }
}
