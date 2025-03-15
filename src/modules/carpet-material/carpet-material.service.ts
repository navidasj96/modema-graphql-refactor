import { Injectable } from '@nestjs/common';
import { CreateCarpetMaterialInput } from './dto/create-carpet-material.input';
import { UpdateCarpetMaterialInput } from './dto/update-carpet-material.input';

@Injectable()
export class CarpetMaterialService {
  create(createCarpetMaterialInput: CreateCarpetMaterialInput) {
    return 'This action adds a new carpetMaterial';
  }

  findAll() {
    return `This action returns all carpetMaterial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carpetMaterial`;
  }

  update(id: number, updateCarpetMaterialInput: UpdateCarpetMaterialInput) {
    return `This action updates a #${id} carpetMaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} carpetMaterial`;
  }
}
