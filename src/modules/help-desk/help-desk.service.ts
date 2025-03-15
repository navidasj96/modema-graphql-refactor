import { Injectable } from '@nestjs/common';
import { CreateHelpDeskInput } from './dto/create-help-desk.input';
import { UpdateHelpDeskInput } from './dto/update-help-desk.input';

@Injectable()
export class HelpDeskService {
  create(createHelpDeskInput: CreateHelpDeskInput) {
    return 'This action adds a new helpDesk';
  }

  findAll() {
    return `This action returns all helpDesk`;
  }

  findOne(id: number) {
    return `This action returns a #${id} helpDesk`;
  }

  update(id: number, updateHelpDeskInput: UpdateHelpDeskInput) {
    return `This action updates a #${id} helpDesk`;
  }

  remove(id: number) {
    return `This action removes a #${id} helpDesk`;
  }
}
