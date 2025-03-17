import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ShippingServiceService } from './shipping-service.service';
import { CreateShippingServiceInput } from './dto/create-shipping-service.input';
import { UpdateShippingServiceInput } from './dto/update-shipping-service.input';
import { ShippingService } from '@/modules/shipping-service/domain/shipping-service';

@Resolver(() => ShippingService)
export class ShippingServiceResolver {
  constructor(
    private readonly shippingServiceService: ShippingServiceService,
  ) {}

  @Mutation(() => ShippingService)
  createShippingService(
    @Args('createShippingServiceInput')
    createShippingServiceInput: CreateShippingServiceInput,
  ) {
    return this.shippingServiceService.create(createShippingServiceInput);
  }

  @Query(() => [ShippingService], { name: 'shippingService' })
  findAll() {
    return this.shippingServiceService.findAll();
  }

  @Query(() => ShippingService, { name: 'shippingService' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.shippingServiceService.findOne(id);
  }

  @Mutation(() => ShippingService)
  updateShippingService(
    @Args('updateShippingServiceInput')
    updateShippingServiceInput: UpdateShippingServiceInput,
  ) {
    return this.shippingServiceService.update(
      updateShippingServiceInput.id,
      updateShippingServiceInput,
    );
  }

  @Mutation(() => ShippingService)
  removeShippingService(@Args('id', { type: () => Int }) id: number) {
    return this.shippingServiceService.remove(id);
  }
}
