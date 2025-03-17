import { Injectable } from '@nestjs/common';
import { CreateTmpRfmReportInput } from './dto/create-tmp-rfm-report.input';
import { UpdateTmpRfmReportInput } from './dto/update-tmp-rfm-report.input';

@Injectable()
export class TmpRfmReportService {
  create(createTmpRfmReportInput: CreateTmpRfmReportInput) {
    return 'This action adds a new tmpRfmReport';
  }

  findAll() {
    return `This action returns all tmpRfmReport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tmpRfmReport`;
  }

  update(id: number, updateTmpRfmReportInput: UpdateTmpRfmReportInput) {
    return `This action updates a #${id} tmpRfmReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} tmpRfmReport`;
  }
}
