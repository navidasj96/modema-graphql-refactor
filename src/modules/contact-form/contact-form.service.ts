import { Injectable } from '@nestjs/common';
import { CreateContactFormInput } from './dto/create-contact-form.input';
import { UpdateContactFormInput } from './dto/update-contact-form.input';

@Injectable()
export class ContactFormService {
  create(createContactFormInput: CreateContactFormInput) {
    return 'This action adds a new contactForm';
  }

  findAll() {
    return `This action returns all contactForm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactForm`;
  }

  update(id: number, updateContactFormInput: UpdateContactFormInput) {
    return `This action updates a #${id} contactForm`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactForm`;
  }
}
