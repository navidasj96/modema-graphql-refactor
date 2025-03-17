import { Injectable } from '@nestjs/common';
import { CreateTmpTagChangesPrintInput } from './dto/create-tmp-tag-changes-print.input';
import { UpdateTmpTagChangesPrintInput } from './dto/update-tmp-tag-changes-print.input';

@Injectable()
export class TmpTagChangesPrintService {
  create(createTmpTagChangesPrintInput: CreateTmpTagChangesPrintInput) {
    return 'This action adds a new tmpTagChangesPrint';
  }

  findAll() {
    return `This action returns all tmpTagChangesPrint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tmpTagChangesPrint`;
  }

  update(id: number, updateTmpTagChangesPrintInput: UpdateTmpTagChangesPrintInput) {
    return `This action updates a #${id} tmpTagChangesPrint`;
  }

  remove(id: number) {
    return `This action removes a #${id} tmpTagChangesPrint`;
  }
}
