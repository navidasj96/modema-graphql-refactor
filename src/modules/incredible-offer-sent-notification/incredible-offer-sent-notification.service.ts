import { Injectable } from '@nestjs/common';
import { CreateIncredibleOfferSentNotificationInput } from './dto/create-incredible-offer-sent-notification.input';
import { UpdateIncredibleOfferSentNotificationInput } from './dto/update-incredible-offer-sent-notification.input';

@Injectable()
export class IncredibleOfferSentNotificationService {
  create(createIncredibleOfferSentNotificationInput: CreateIncredibleOfferSentNotificationInput) {
    return 'This action adds a new incredibleOfferSentNotification';
  }

  findAll() {
    return `This action returns all incredibleOfferSentNotification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incredibleOfferSentNotification`;
  }

  update(id: number, updateIncredibleOfferSentNotificationInput: UpdateIncredibleOfferSentNotificationInput) {
    return `This action updates a #${id} incredibleOfferSentNotification`;
  }

  remove(id: number) {
    return `This action removes a #${id} incredibleOfferSentNotification`;
  }
}
