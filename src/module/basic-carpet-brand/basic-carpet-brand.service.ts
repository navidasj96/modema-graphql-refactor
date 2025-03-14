import { Injectable } from '@nestjs/common';
import { CreateBasicCarpetBrandInput } from './dto/create-basic-carpet-brand.input';
import { UpdateBasicCarpetBrandInput } from './dto/update-basic-carpet-brand.input';

@Injectable()
export class BasicCarpetBrandService {
  create(createBasicCarpetBrandInput: CreateBasicCarpetBrandInput) {
    return 'This action adds a new basicCarpetBrand';
  }

  findAll() {
    return `This action returns all basicCarpetBrand`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basicCarpetBrand`;
  }

  update(id: number, updateBasicCarpetBrandInput: UpdateBasicCarpetBrandInput) {
    return `This action updates a #${id} basicCarpetBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicCarpetBrand`;
  }
}
