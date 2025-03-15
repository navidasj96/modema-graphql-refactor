import { Injectable } from '@nestjs/common';
import { CreateBasicCarpetDesignerInput } from './dto/create-basic-carpet-designer.input';
import { UpdateBasicCarpetDesignerInput } from './dto/update-basic-carpet-designer.input';

@Injectable()
export class BasicCarpetDesignerService {
  create(createBasicCarpetDesignerInput: CreateBasicCarpetDesignerInput) {
    return 'This action adds a new basicCarpetDesigner';
  }

  findAll() {
    return `This action returns all basicCarpetDesigner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basicCarpetDesigner`;
  }

  update(id: number, updateBasicCarpetDesignerInput: UpdateBasicCarpetDesignerInput) {
    return `This action updates a #${id} basicCarpetDesigner`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicCarpetDesigner`;
  }
}
