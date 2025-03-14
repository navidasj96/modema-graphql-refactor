import { Injectable } from '@nestjs/common';
import { CreateBasicCarpetMaterialInput } from './dto/create-basic-carpet-material.input';
import { UpdateBasicCarpetMaterialInput } from './dto/update-basic-carpet-material.input';

@Injectable()
export class BasicCarpetMaterialService {
  create(createBasicCarpetMaterialInput: CreateBasicCarpetMaterialInput) {
    return 'This action adds a new basicCarpetMaterial';
  }

  findAll() {
    return `This action returns all basicCarpetMaterial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basicCarpetMaterial`;
  }

  update(id: number, updateBasicCarpetMaterialInput: UpdateBasicCarpetMaterialInput) {
    return `This action updates a #${id} basicCarpetMaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicCarpetMaterial`;
  }
}
