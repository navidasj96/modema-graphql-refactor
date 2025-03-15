import { Injectable } from '@nestjs/common';
import { CreatePrintProfileInput } from './dto/create-print-profile.input';
import { UpdatePrintProfileInput } from './dto/update-print-profile.input';

@Injectable()
export class PrintProfileService {
  create(createPrintProfileInput: CreatePrintProfileInput) {
    return 'This action adds a new printProfile';
  }

  findAll() {
    return `This action returns all printProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} printProfile`;
  }

  update(id: number, updatePrintProfileInput: UpdatePrintProfileInput) {
    return `This action updates a #${id} printProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} printProfile`;
  }
}
