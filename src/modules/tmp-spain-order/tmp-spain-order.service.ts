import { Injectable } from '@nestjs/common';
import { CreateTmpSpainOrderInput } from './dto/create-tmp-spain-order.input';
import { UpdateTmpSpainOrderInput } from './dto/update-tmp-spain-order.input';

@Injectable()
export class TmpSpainOrderService {
  create(createTmpSpainOrderInput: CreateTmpSpainOrderInput) {
    return 'This action adds a new tmpSpainOrder';
  }

  findAll() {
    return `This action returns all tmpSpainOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tmpSpainOrder`;
  }

  update(id: number, updateTmpSpainOrderInput: UpdateTmpSpainOrderInput) {
    return `This action updates a #${id} tmpSpainOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} tmpSpainOrder`;
  }
}
