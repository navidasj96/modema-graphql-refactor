import { Injectable } from '@nestjs/common';
import { CreateReadyToSendProductInput } from './dto/create-ready-to-send-product.input';
import { UpdateReadyToSendProductInput } from './dto/update-ready-to-send-product.input';

@Injectable()
export class ReadyToSendProductService {
  create(createReadyToSendProductInput: CreateReadyToSendProductInput) {
    return 'This action adds a new readyToSendProduct';
  }

  findAll() {
    return `This action returns all readyToSendProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} readyToSendProduct`;
  }

  update(id: number, updateReadyToSendProductInput: UpdateReadyToSendProductInput) {
    return `This action updates a #${id} readyToSendProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} readyToSendProduct`;
  }
}
