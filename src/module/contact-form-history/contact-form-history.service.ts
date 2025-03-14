import { Injectable } from '@nestjs/common';
import { CreateContactFormHistoryInput } from './dto/create-contact-form-history.input';
import { UpdateContactFormHistoryInput } from './dto/update-contact-form-history.input';

@Injectable()
export class ContactFormHistoryService {
  create(createContactFormHistoryInput: CreateContactFormHistoryInput) {
    return 'This action adds a new contactFormHistory';
  }

  findAll() {
    return `This action returns all contactFormHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactFormHistory`;
  }

  update(id: number, updateContactFormHistoryInput: UpdateContactFormHistoryInput) {
    return `This action updates a #${id} contactFormHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactFormHistory`;
  }
}
