import { Injectable } from '@nestjs/common';
import { CreateDesignInput } from './dto/create-design.input';
import { UpdateDesignInput } from './dto/update-design.input';

@Injectable()
export class DesignService {
  create(createDesignInput: CreateDesignInput) {
    return 'This action adds a new design';
  }

  findAll() {
    return `This action returns all design`;
  }

  findOne(id: number) {
    return `This action returns a #${id} design`;
  }

  update(id: number, updateDesignInput: UpdateDesignInput) {
    return `This action updates a #${id} design`;
  }

  remove(id: number) {
    return `This action removes a #${id} design`;
  }
}
