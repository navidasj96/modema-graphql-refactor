import { Injectable } from '@nestjs/common';
import { CreateSubproductSpecialImageInput } from './dto/create-subproduct-special-image.input';
import { UpdateSubproductSpecialImageInput } from './dto/update-subproduct-special-image.input';

@Injectable()
export class SubproductSpecialImageService {
  create(createSubproductSpecialImageInput: CreateSubproductSpecialImageInput) {
    return 'This action adds a new subproductSpecialImage';
  }

  findAll() {
    return `This action returns all subproductSpecialImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subproductSpecialImage`;
  }

  update(id: number, updateSubproductSpecialImageInput: UpdateSubproductSpecialImageInput) {
    return `This action updates a #${id} subproductSpecialImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} subproductSpecialImage`;
  }
}
