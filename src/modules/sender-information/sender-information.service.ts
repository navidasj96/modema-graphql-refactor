import { Injectable } from '@nestjs/common';
import { CreateSenderInformationInput } from './dto/create-sender-information.input';
import { UpdateSenderInformationInput } from './dto/update-sender-information.input';

@Injectable()
export class SenderInformationService {
  create(createSenderInformationInput: CreateSenderInformationInput) {
    return 'This action adds a new senderInformation';
  }

  findAll() {
    return `This action returns all senderInformation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} senderInformation`;
  }

  update(id: number, updateSenderInformationInput: UpdateSenderInformationInput) {
    return `This action updates a #${id} senderInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} senderInformation`;
  }
}
