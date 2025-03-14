import { Injectable } from '@nestjs/common';
import { CreateConfigInput } from './dto/create-config.input';
import { UpdateConfigInput } from './dto/update-config.input';

@Injectable()
export class ConfigService {
  create(createConfigInput: CreateConfigInput) {
    return 'This action adds a new config';
  }

  findAll() {
    return `This action returns all config`;
  }

  findOne(id: number) {
    return `This action returns a #${id} config`;
  }

  update(id: number, updateConfigInput: UpdateConfigInput) {
    return `This action updates a #${id} config`;
  }

  remove(id: number) {
    return `This action removes a #${id} config`;
  }
}
