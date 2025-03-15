import { Injectable } from '@nestjs/common';
import { CreateNewBorderInput } from './dto/create-new-border.input';
import { UpdateNewBorderInput } from './dto/update-new-border.input';

@Injectable()
export class NewBorderService {
  create(createNewBorderInput: CreateNewBorderInput) {
    return 'This action adds a new newBorder';
  }

  findAll() {
    return `This action returns all newBorder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newBorder`;
  }

  update(id: number, updateNewBorderInput: UpdateNewBorderInput) {
    return `This action updates a #${id} newBorder`;
  }

  remove(id: number) {
    return `This action removes a #${id} newBorder`;
  }
}
