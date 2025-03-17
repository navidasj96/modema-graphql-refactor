import { Injectable } from '@nestjs/common';
import { CreateWithdrawalRequestInput } from './dto/create-withdrawal-request.input';
import { UpdateWithdrawalRequestInput } from './dto/update-withdrawal-request.input';

@Injectable()
export class WithdrawalRequestService {
  create(createWithdrawalRequestInput: CreateWithdrawalRequestInput) {
    return 'This action adds a new withdrawalRequest';
  }

  findAll() {
    return `This action returns all withdrawalRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} withdrawalRequest`;
  }

  update(id: number, updateWithdrawalRequestInput: UpdateWithdrawalRequestInput) {
    return `This action updates a #${id} withdrawalRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} withdrawalRequest`;
  }
}
