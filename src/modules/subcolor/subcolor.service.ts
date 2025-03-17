import { Injectable } from '@nestjs/common';
import { CreateSubcolorInput } from './dto/create-subcolor.input';
import { UpdateSubcolorInput } from './dto/update-subcolor.input';

@Injectable()
export class SubcolorService {
  create(createSubcolorInput: CreateSubcolorInput) {
    return 'This action adds a new subcolor';
  }

  findAll() {
    return `This action returns all subcolor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subcolor`;
  }

  update(id: number, updateSubcolorInput: UpdateSubcolorInput) {
    return `This action updates a #${id} subcolor`;
  }

  remove(id: number) {
    return `This action removes a #${id} subcolor`;
  }
}
