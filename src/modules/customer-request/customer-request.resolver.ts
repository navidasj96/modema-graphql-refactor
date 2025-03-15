import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomerRequestService } from './customer-request.service';
import { CreateCustomerRequestInput } from './dto/create-customer-request.input';
import { UpdateCustomerRequestInput } from './dto/update-customer-request.input';
import { CustomerRequest } from './domain/customer-request';

@Resolver(() => CustomerRequest)
export class CustomerRequestResolver {
  constructor(
    private readonly customerRequestService: CustomerRequestService,
  ) {}

  @Mutation(() => CustomerRequest)
  createCustomerRequest(
    @Args('createCustomerRequestInput')
    createCustomerRequestInput: CreateCustomerRequestInput,
  ) {
    return this.customerRequestService.create(createCustomerRequestInput);
  }

  @Query(() => [CustomerRequest], { name: 'customerRequest' })
  findAll() {
    return this.customerRequestService.findAll();
  }

  @Query(() => CustomerRequest, { name: 'customerRequest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.customerRequestService.findOne(id);
  }

  @Mutation(() => CustomerRequest)
  updateCustomerRequest(
    @Args('updateCustomerRequestInput')
    updateCustomerRequestInput: UpdateCustomerRequestInput,
  ) {
    return this.customerRequestService.update(
      updateCustomerRequestInput.id,
      updateCustomerRequestInput,
    );
  }

  @Mutation(() => CustomerRequest)
  removeCustomerRequest(@Args('id', { type: () => Int }) id: number) {
    return this.customerRequestService.remove(id);
  }
}
