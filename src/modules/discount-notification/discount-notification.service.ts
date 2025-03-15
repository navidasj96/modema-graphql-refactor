import { Injectable } from '@nestjs/common';
import { CreateDiscountNotificationInput } from './dto/create-discount-notification.input';
import { UpdateDiscountNotificationInput } from './dto/update-discount-notification.input';

@Injectable()
export class DiscountNotificationService {
  create(createDiscountNotificationInput: CreateDiscountNotificationInput) {
    return 'This action adds a new discountNotification';
  }

  findAll() {
    return `This action returns all discountNotification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} discountNotification`;
  }

  update(id: number, updateDiscountNotificationInput: UpdateDiscountNotificationInput) {
    return `This action updates a #${id} discountNotification`;
  }

  remove(id: number) {
    return `This action removes a #${id} discountNotification`;
  }
}
