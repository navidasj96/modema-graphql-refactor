import { Injectable } from '@nestjs/common';
import { CreateFailedJobInput } from './dto/create-failed-job.input';
import { UpdateFailedJobInput } from './dto/update-failed-job.input';

@Injectable()
export class FailedJobService {
  create(createFailedJobInput: CreateFailedJobInput) {
    return 'This action adds a new failedJob';
  }

  findAll() {
    return `This action returns all failedJob`;
  }

  findOne(id: number) {
    return `This action returns a #${id} failedJob`;
  }

  update(id: number, updateFailedJobInput: UpdateFailedJobInput) {
    return `This action updates a #${id} failedJob`;
  }

  remove(id: number) {
    return `This action removes a #${id} failedJob`;
  }
}
