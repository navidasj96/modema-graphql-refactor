import { Injectable } from '@nestjs/common';
import { CreateBasicCarpetDesignInput } from './dto/create-basic-carpet-design.input';
import { UpdateBasicCarpetDesignInput } from './dto/update-basic-carpet-design.input';

@Injectable()
export class BasicCarpetDesignService {
  create(createBasicCarpetDesignInput: CreateBasicCarpetDesignInput) {
    return 'This action adds a new basicCarpetDesign';
  }

  findAll() {
    return `This action returns all basicCarpetDesign`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basicCarpetDesign`;
  }

  update(
    id: number,
    updateBasicCarpetDesignInput: UpdateBasicCarpetDesignInput
  ) {
    return `This action updates a #${id} basicCarpetDesign`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicCarpetDesign`;
  }
}
