import { Injectable } from '@nestjs/common';
import { CreateExportProductInput } from './dto/create-export-product.input';
import { UpdateExportProductInput } from './dto/update-export-product.input';

@Injectable()
export class ExportProductService {
  create(createExportProductInput: CreateExportProductInput) {
    return 'This action adds a new exportProduct';
  }

  findAll() {
    return `This action returns all exportProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exportProduct`;
  }

  update(id: number, updateExportProductInput: UpdateExportProductInput) {
    return `This action updates a #${id} exportProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} exportProduct`;
  }
}
