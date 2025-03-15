import { Injectable } from '@nestjs/common';
import { CreateContactFormStatusInput } from './dto/create-contact-form-status.input';
import { UpdateContactFormStatusInput } from './dto/update-contact-form-status.input';

@Injectable()
export class ContactFormStatusService {
  create(createContactFormStatusInput: CreateContactFormStatusInput) {
    return 'This action adds a new contactFormStatus';
  }

  findAll() {
    return `This action returns all contactFormStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactFormStatus`;
  }

  update(id: number, updateContactFormStatusInput: UpdateContactFormStatusInput) {
    return `This action updates a #${id} contactFormStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactFormStatus`;
  }
}
