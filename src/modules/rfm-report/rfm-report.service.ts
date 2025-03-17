import { Injectable } from '@nestjs/common';
import { CreateRfmReportInput } from './dto/create-rfm-report.input';
import { UpdateRfmReportInput } from './dto/update-rfm-report.input';

@Injectable()
export class RfmReportService {
  create(createRfmReportInput: CreateRfmReportInput) {
    return 'This action adds a new rfmReport';
  }

  findAll() {
    return `This action returns all rfmReport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rfmReport`;
  }

  update(id: number, updateRfmReportInput: UpdateRfmReportInput) {
    return `This action updates a #${id} rfmReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} rfmReport`;
  }
}
