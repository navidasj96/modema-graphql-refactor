import { Injectable } from '@nestjs/common';
import { CreateShippingServiceInput } from './dto/create-shipping-service.input';
import { UpdateShippingServiceInput } from './dto/update-shipping-service.input';

@Injectable()
export class ShippingServiceService {
  create(createShippingServiceInput: CreateShippingServiceInput) {
    return 'This action adds a new shippingService';
  }

  findAll() {
    return `This action returns all shippingService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shippingService`;
  }

  update(id: number, updateShippingServiceInput: UpdateShippingServiceInput) {
    return `This action updates a #${id} shippingService`;
  }

  remove(id: number) {
    return `This action removes a #${id} shippingService`;
  }
}
