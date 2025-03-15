import { Injectable } from '@nestjs/common';
import { CreatePrintRipInput } from './dto/create-print-rip.input';
import { UpdatePrintRipInput } from './dto/update-print-rip.input';

@Injectable()
export class PrintRipService {
  create(createPrintRipInput: CreatePrintRipInput) {
    return 'This action adds a new printRip';
  }

  findAll() {
    return `This action returns all printRip`;
  }

  findOne(id: number) {
    return `This action returns a #${id} printRip`;
  }

  update(id: number, updatePrintRipInput: UpdatePrintRipInput) {
    return `This action updates a #${id} printRip`;
  }

  remove(id: number) {
    return `This action removes a #${id} printRip`;
  }
}
