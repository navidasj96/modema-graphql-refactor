import { Injectable } from '@nestjs/common';
import { CreateHolidayInput } from './dto/create-holiday.input';
import { UpdateHolidayInput } from './dto/update-holiday.input';

@Injectable()
export class HolidayService {
  create(createHolidayInput: CreateHolidayInput) {
    return 'This action adds a new holiday';
  }

  findAll() {
    return `This action returns all holiday`;
  }

  findOne(id: number) {
    return `This action returns a #${id} holiday`;
  }

  update(id: number, updateHolidayInput: UpdateHolidayInput) {
    return `This action updates a #${id} holiday`;
  }

  remove(id: number) {
    return `This action removes a #${id} holiday`;
  }
}
