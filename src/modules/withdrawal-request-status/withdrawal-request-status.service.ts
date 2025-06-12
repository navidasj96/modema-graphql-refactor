import { Injectable } from '@nestjs/common';
import { CreateWithdrawalRequestStatusInput } from './dto/create-withdrawal-request-status.input';
import { UpdateWithdrawalRequestStatusInput } from './dto/update-withdrawal-request-status.input';

@Injectable()
export class WithdrawalRequestStatusService {
  create(
    createWithdrawalRequestStatusInput: CreateWithdrawalRequestStatusInput
  ) {
    return 'This action adds a new withdrawalRequestStatus';
  }

  findAll() {
    return `This action returns all withdrawalRequestStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} withdrawalRequestStatus`;
  }

  update(
    id: number,
    updateWithdrawalRequestStatusInput: UpdateWithdrawalRequestStatusInput
  ) {
    return `This action updates a #${id} withdrawalRequestStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} withdrawalRequestStatus`;
  }
}
