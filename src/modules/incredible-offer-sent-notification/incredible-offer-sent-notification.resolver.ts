import { Resolver } from '@nestjs/graphql';
import { IncredibleOfferSentNotificationService } from './incredible-offer-sent-notification.service';
import { IncredibleOfferSentNotification } from '@/modules/incredible-offer-sent-notification/domain/incredible-offer-sent-notification';

@Resolver(() => IncredibleOfferSentNotification)
export class IncredibleOfferSentNotificationResolver {
  constructor(
    private readonly incredibleOfferSentNotificationService: IncredibleOfferSentNotificationService,
  ) {}
}
