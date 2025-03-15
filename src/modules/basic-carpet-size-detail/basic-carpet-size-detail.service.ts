import { Injectable } from '@nestjs/common';
import { CreateBasicCarpetSizeDetailInput } from './dto/create-basic-carpet-size-detail.input';
import { UpdateBasicCarpetSizeDetailInput } from './dto/update-basic-carpet-size-detail.input';

@Injectable()
export class BasicCarpetSizeDetailService {
  create(createBasicCarpetSizeDetailInput: CreateBasicCarpetSizeDetailInput) {
    return 'This action adds a new basicCarpetSizeDetail';
  }

  findAll() {
    return `This action returns all basicCarpetSizeDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basicCarpetSizeDetail`;
  }

  update(id: number, updateBasicCarpetSizeDetailInput: UpdateBasicCarpetSizeDetailInput) {
    return `This action updates a #${id} basicCarpetSizeDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicCarpetSizeDetail`;
  }
}
