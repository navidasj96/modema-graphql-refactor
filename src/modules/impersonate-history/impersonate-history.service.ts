import { Injectable } from '@nestjs/common';
import { CreateImpersonateHistoryInput } from './dto/create-impersonate-history.input';
import { UpdateImpersonateHistoryInput } from './dto/update-impersonate-history.input';

@Injectable()
export class ImpersonateHistoryService {
  create(createImpersonateHistoryInput: CreateImpersonateHistoryInput) {
    return 'This action adds a new impersonateHistory';
  }

  findAll() {
    return `This action returns all impersonateHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} impersonateHistory`;
  }

  update(id: number, updateImpersonateHistoryInput: UpdateImpersonateHistoryInput) {
    return `This action updates a #${id} impersonateHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} impersonateHistory`;
  }
}
