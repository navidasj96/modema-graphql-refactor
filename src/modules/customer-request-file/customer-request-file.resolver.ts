import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomerRequestFileService } from './customer-request-file.service';
import { CreateCustomerRequestFileInput } from './dto/create-customer-request-file.input';
import { UpdateCustomerRequestFileInput } from './dto/update-customer-request-file.input';
import { CustomerRequestFile } from './domain/customer-request-file';

@Resolver(() => CustomerRequestFile)
export class CustomerRequestFileResolver {
  constructor(
    private readonly customerRequestFileService: CustomerRequestFileService,
  ) {}

  @Mutation(() => CustomerRequestFile)
  createCustomerRequestFile(
    @Args('createCustomerRequestFileInput')
    createCustomerRequestFileInput: CreateCustomerRequestFileInput,
  ) {
    return this.customerRequestFileService.create(
      createCustomerRequestFileInput,
    );
  }

  @Query(() => [CustomerRequestFile], { name: 'customerRequestFile' })
  findAll() {
    return this.customerRequestFileService.findAll();
  }

  @Query(() => CustomerRequestFile, { name: 'customerRequestFile' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.customerRequestFileService.findOne(id);
  }

  @Mutation(() => CustomerRequestFile)
  updateCustomerRequestFile(
    @Args('updateCustomerRequestFileInput')
    updateCustomerRequestFileInput: UpdateCustomerRequestFileInput,
  ) {
    return this.customerRequestFileService.update(
      updateCustomerRequestFileInput.id,
      updateCustomerRequestFileInput,
    );
  }

  @Mutation(() => CustomerRequestFile)
  removeCustomerRequestFile(@Args('id', { type: () => Int }) id: number) {
    return this.customerRequestFileService.remove(id);
  }
}
