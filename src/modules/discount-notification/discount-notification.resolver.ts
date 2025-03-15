import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DiscountNotificationService } from './discount-notification.service';
import { CreateDiscountNotificationInput } from './dto/create-discount-notification.input';
import { UpdateDiscountNotificationInput } from './dto/update-discount-notification.input';
import { DiscountNotification } from './domain/discount-notification';

@Resolver(() => DiscountNotification)
export class DiscountNotificationResolver {
  constructor(
    private readonly discountNotificationService: DiscountNotificationService,
  ) {}

  @Mutation(() => DiscountNotification)
  createDiscountNotification(
    @Args('createDiscountNotificationInput')
    createDiscountNotificationInput: CreateDiscountNotificationInput,
  ) {
    return this.discountNotificationService.create(
      createDiscountNotificationInput,
    );
  }

  @Query(() => [DiscountNotification], { name: 'discountNotification' })
  findAll() {
    return this.discountNotificationService.findAll();
  }

  @Query(() => DiscountNotification, { name: 'discountNotification' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.discountNotificationService.findOne(id);
  }

  @Mutation(() => DiscountNotification)
  updateDiscountNotification(
    @Args('updateDiscountNotificationInput')
    updateDiscountNotificationInput: UpdateDiscountNotificationInput,
  ) {
    return this.discountNotificationService.update(
      updateDiscountNotificationInput.id,
      updateDiscountNotificationInput,
    );
  }

  @Mutation(() => DiscountNotification)
  removeDiscountNotification(@Args('id', { type: () => Int }) id: number) {
    return this.discountNotificationService.remove(id);
  }
}
