import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubscriberService } from './subscriber.service';
import { CreateSubscriberInput } from './dto/create-subscriber.input';
import { UpdateSubscriberInput } from './dto/update-subscriber.input';
import { Subscriber } from '@/modules/subscriber/domain/subscriber';

@Resolver(() => Subscriber)
export class SubscriberResolver {
  constructor(private readonly subscriberService: SubscriberService) {}

  @Mutation(() => Subscriber)
  createSubscriber(
    @Args('createSubscriberInput') createSubscriberInput: CreateSubscriberInput,
  ) {
    return this.subscriberService.create(createSubscriberInput);
  }

  @Query(() => [Subscriber], { name: 'subscriber' })
  findAll() {
    return this.subscriberService.findAll();
  }

  @Query(() => Subscriber, { name: 'subscriber' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subscriberService.findOne(id);
  }

  @Mutation(() => Subscriber)
  updateSubscriber(
    @Args('updateSubscriberInput') updateSubscriberInput: UpdateSubscriberInput,
  ) {
    return this.subscriberService.update(
      updateSubscriberInput.id,
      updateSubscriberInput,
    );
  }

  @Mutation(() => Subscriber)
  removeSubscriber(@Args('id', { type: () => Int }) id: number) {
    return this.subscriberService.remove(id);
  }
}
