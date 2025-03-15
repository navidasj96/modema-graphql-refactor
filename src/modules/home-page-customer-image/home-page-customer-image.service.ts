import { Injectable } from '@nestjs/common';
import { CreateHomePageCustomerImageInput } from './dto/create-home-page-customer-image.input';
import { UpdateHomePageCustomerImageInput } from './dto/update-home-page-customer-image.input';

@Injectable()
export class HomePageCustomerImageService {
  create(createHomePageCustomerImageInput: CreateHomePageCustomerImageInput) {
    return 'This action adds a new homePageCustomerImage';
  }

  findAll() {
    return `This action returns all homePageCustomerImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} homePageCustomerImage`;
  }

  update(id: number, updateHomePageCustomerImageInput: UpdateHomePageCustomerImageInput) {
    return `This action updates a #${id} homePageCustomerImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} homePageCustomerImage`;
  }
}
