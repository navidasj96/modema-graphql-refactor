import { Resolver } from '@nestjs/graphql';
import { DiscountNotificationService } from './discount-notification.service';
import { DiscountNotification } from './domain/discount-notification';

@Resolver(() => DiscountNotification)
export class DiscountNotificationResolver {
  constructor(
    private readonly discountNotificationService: DiscountNotificationService,
  ) {}
}
