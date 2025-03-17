import { Injectable } from '@nestjs/common';
import { CreateSubproductVideoInput } from './dto/create-subproduct-video.input';
import { UpdateSubproductVideoInput } from './dto/update-subproduct-video.input';

@Injectable()
export class SubproductVideoService {
  create(createSubproductVideoInput: CreateSubproductVideoInput) {
    return 'This action adds a new subproductVideo';
  }

  findAll() {
    return `This action returns all subproductVideo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subproductVideo`;
  }

  update(id: number, updateSubproductVideoInput: UpdateSubproductVideoInput) {
    return `This action updates a #${id} subproductVideo`;
  }

  remove(id: number) {
    return `This action removes a #${id} subproductVideo`;
  }
}
