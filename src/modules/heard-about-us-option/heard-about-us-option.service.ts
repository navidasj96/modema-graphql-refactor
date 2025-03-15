import { Injectable } from '@nestjs/common';
import { CreateHeardAboutUsOptionInput } from './dto/create-heard-about-us-option.input';
import { UpdateHeardAboutUsOptionInput } from './dto/update-heard-about-us-option.input';

@Injectable()
export class HeardAboutUsOptionService {
  create(createHeardAboutUsOptionInput: CreateHeardAboutUsOptionInput) {
    return 'This action adds a new heardAboutUsOption';
  }

  findAll() {
    return `This action returns all heardAboutUsOption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} heardAboutUsOption`;
  }

  update(id: number, updateHeardAboutUsOptionInput: UpdateHeardAboutUsOptionInput) {
    return `This action updates a #${id} heardAboutUsOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} heardAboutUsOption`;
  }
}
