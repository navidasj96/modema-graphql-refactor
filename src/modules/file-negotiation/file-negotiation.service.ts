import { Injectable } from '@nestjs/common';
import { CreateFileNegotiationInput } from './dto/create-file-negotiation.input';
import { UpdateFileNegotiationInput } from './dto/update-file-negotiation.input';

@Injectable()
export class FileNegotiationService {
  create(createFileNegotiationInput: CreateFileNegotiationInput) {
    return 'This action adds a new fileNegotiation';
  }

  findAll() {
    return `This action returns all fileNegotiation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileNegotiation`;
  }

  update(id: number, updateFileNegotiationInput: UpdateFileNegotiationInput) {
    return `This action updates a #${id} fileNegotiation`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileNegotiation`;
  }
}
