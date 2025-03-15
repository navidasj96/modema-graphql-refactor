import { Injectable } from '@nestjs/common';
import { CreateGoogleFormUtmInput } from './dto/create-google-form-utm.input';
import { UpdateGoogleFormUtmInput } from './dto/update-google-form-utm.input';

@Injectable()
export class GoogleFormUtmService {
  create(createGoogleFormUtmInput: CreateGoogleFormUtmInput) {
    return 'This action adds a new googleFormUtm';
  }

  findAll() {
    return `This action returns all googleFormUtm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} googleFormUtm`;
  }

  update(id: number, updateGoogleFormUtmInput: UpdateGoogleFormUtmInput) {
    return `This action updates a #${id} googleFormUtm`;
  }

  remove(id: number) {
    return `This action removes a #${id} googleFormUtm`;
  }
}
