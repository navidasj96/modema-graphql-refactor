import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnRequestAddressService } from './return-request-address.service';
import { CreateReturnRequestAddressInput } from './dto/create-return-request-address.input';
import { UpdateReturnRequestAddressInput } from './dto/update-return-request-address.input';
import { ReturnRequestAddress } from '@/modules/return-request-address/domain/return-request-address';

@Resolver(() => ReturnRequestAddress)
export class ReturnRequestAddressResolver {
  constructor(
    private readonly returnRequestAddressService: ReturnRequestAddressService,
  ) {}

  @Mutation(() => ReturnRequestAddress)
  createReturnRequestAddress(
    @Args('createReturnRequestAddressInput')
    createReturnRequestAddressInput: CreateReturnRequestAddressInput,
  ) {
    return this.returnRequestAddressService.create(
      createReturnRequestAddressInput,
    );
  }

  @Query(() => [ReturnRequestAddress], { name: 'returnRequestAddress' })
  findAll() {
    return this.returnRequestAddressService.findAll();
  }

  @Query(() => ReturnRequestAddress, { name: 'returnRequestAddress' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestAddressService.findOne(id);
  }

  @Mutation(() => ReturnRequestAddress)
  updateReturnRequestAddress(
    @Args('updateReturnRequestAddressInput')
    updateReturnRequestAddressInput: UpdateReturnRequestAddressInput,
  ) {
    return this.returnRequestAddressService.update(
      updateReturnRequestAddressInput.id,
      updateReturnRequestAddressInput,
    );
  }

  @Mutation(() => ReturnRequestAddress)
  removeReturnRequestAddress(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestAddressService.remove(id);
  }
}
