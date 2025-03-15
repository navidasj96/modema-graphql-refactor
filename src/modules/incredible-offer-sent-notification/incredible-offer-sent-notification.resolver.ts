import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IncredibleOfferSentNotificationService } from './incredible-offer-sent-notification.service';
import { CreateIncredibleOfferSentNotificationInput } from './dto/create-incredible-offer-sent-notification.input';
import { UpdateIncredibleOfferSentNotificationInput } from './dto/update-incredible-offer-sent-notification.input';
import { IncredibleOfferSentNotification } from '@/modules/incredible-offer-sent-notification/domain/incredible-offer-sent-notification';

@Resolver(() => IncredibleOfferSentNotification)
export class IncredibleOfferSentNotificationResolver {
  constructor(
    private readonly incredibleOfferSentNotificationService: IncredibleOfferSentNotificationService,
  ) {}

  @Mutation(() => IncredibleOfferSentNotification)
  createIncredibleOfferSentNotification(
    @Args('createIncredibleOfferSentNotificationInput')
    createIncredibleOfferSentNotificationInput: CreateIncredibleOfferSentNotificationInput,
  ) {
    return this.incredibleOfferSentNotificationService.create(
      createIncredibleOfferSentNotificationInput,
    );
  }

  @Query(() => [IncredibleOfferSentNotification], {
    name: 'incredibleOfferSentNotification',
  })
  findAll() {
    return this.incredibleOfferSentNotificationService.findAll();
  }

  @Query(() => IncredibleOfferSentNotification, {
    name: 'incredibleOfferSentNotification',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.incredibleOfferSentNotificationService.findOne(id);
  }

  @Mutation(() => IncredibleOfferSentNotification)
  updateIncredibleOfferSentNotification(
    @Args('updateIncredibleOfferSentNotificationInput')
    updateIncredibleOfferSentNotificationInput: UpdateIncredibleOfferSentNotificationInput,
  ) {
    return this.incredibleOfferSentNotificationService.update(
      updateIncredibleOfferSentNotificationInput.id,
      updateIncredibleOfferSentNotificationInput,
    );
  }

  @Mutation(() => IncredibleOfferSentNotification)
  removeIncredibleOfferSentNotification(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.incredibleOfferSentNotificationService.remove(id);
  }
}
