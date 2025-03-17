import { Injectable } from '@nestjs/common';
import { CreateTmpSpanishNameInput } from './dto/create-tmp-spanish-name.input';
import { UpdateTmpSpanishNameInput } from './dto/update-tmp-spanish-name.input';

@Injectable()
export class TmpSpanishNameService {
  create(createTmpSpanishNameInput: CreateTmpSpanishNameInput) {
    return 'This action adds a new tmpSpanishName';
  }

  findAll() {
    return `This action returns all tmpSpanishName`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tmpSpanishName`;
  }

  update(id: number, updateTmpSpanishNameInput: UpdateTmpSpanishNameInput) {
    return `This action updates a #${id} tmpSpanishName`;
  }

  remove(id: number) {
    return `This action removes a #${id} tmpSpanishName`;
  }
}
