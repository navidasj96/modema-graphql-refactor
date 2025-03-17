import { Injectable } from '@nestjs/common';
import { CreateRedisSavedKeyInput } from './dto/create-redis-saved-key.input';
import { UpdateRedisSavedKeyInput } from './dto/update-redis-saved-key.input';

@Injectable()
export class RedisSavedKeyService {
  create(createRedisSavedKeyInput: CreateRedisSavedKeyInput) {
    return 'This action adds a new redisSavedKey';
  }

  findAll() {
    return `This action returns all redisSavedKey`;
  }

  findOne(id: number) {
    return `This action returns a #${id} redisSavedKey`;
  }

  update(id: number, updateRedisSavedKeyInput: UpdateRedisSavedKeyInput) {
    return `This action updates a #${id} redisSavedKey`;
  }

  remove(id: number) {
    return `This action removes a #${id} redisSavedKey`;
  }
}
