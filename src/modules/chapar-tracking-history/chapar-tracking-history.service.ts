import { Injectable } from '@nestjs/common';
import { CreateChaparTrackingHistoryInput } from './dto/create-chapar-tracking-history.input';
import { UpdateChaparTrackingHistoryInput } from './dto/update-chapar-tracking-history.input';

@Injectable()
export class ChaparTrackingHistoryService {
  create(createChaparTrackingHistoryInput: CreateChaparTrackingHistoryInput) {
    return 'This action adds a new chaparTrackingHistory';
  }

  findAll() {
    return `This action returns all chaparTrackingHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chaparTrackingHistory`;
  }

  update(id: number, updateChaparTrackingHistoryInput: UpdateChaparTrackingHistoryInput) {
    return `This action updates a #${id} chaparTrackingHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} chaparTrackingHistory`;
  }
}
