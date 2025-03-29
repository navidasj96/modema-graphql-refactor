import { Resolver } from '@nestjs/graphql';
import { SubscriberService } from './subscriber.service';
import { Subscriber } from '@/modules/subscriber/domain/subscriber';

@Resolver(() => Subscriber)
export class SubscriberResolver {
  constructor(private readonly subscriberService: SubscriberService) {}
}
