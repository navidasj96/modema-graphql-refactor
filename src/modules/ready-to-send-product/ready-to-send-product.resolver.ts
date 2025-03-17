import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReadyToSendProductService } from './ready-to-send-product.service';
import { CreateReadyToSendProductInput } from './dto/create-ready-to-send-product.input';
import { UpdateReadyToSendProductInput } from './dto/update-ready-to-send-product.input';
import { ReadyToSendProduct } from '@/modules/ready-to-send-product/domain/ready-to-send-product';

@Resolver(() => ReadyToSendProduct)
export class ReadyToSendProductResolver {
  constructor(
    private readonly readyToSendProductService: ReadyToSendProductService,
  ) {}

  @Mutation(() => ReadyToSendProduct)
  createReadyToSendProduct(
    @Args('createReadyToSendProductInput')
    createReadyToSendProductInput: CreateReadyToSendProductInput,
  ) {
    return this.readyToSendProductService.create(createReadyToSendProductInput);
  }

  @Query(() => [ReadyToSendProduct], { name: 'readyToSendProduct' })
  findAll() {
    return this.readyToSendProductService.findAll();
  }

  @Query(() => ReadyToSendProduct, { name: 'readyToSendProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.readyToSendProductService.findOne(id);
  }

  @Mutation(() => ReadyToSendProduct)
  updateReadyToSendProduct(
    @Args('updateReadyToSendProductInput')
    updateReadyToSendProductInput: UpdateReadyToSendProductInput,
  ) {
    return this.readyToSendProductService.update(
      updateReadyToSendProductInput.id,
      updateReadyToSendProductInput,
    );
  }

  @Mutation(() => ReadyToSendProduct)
  removeReadyToSendProduct(@Args('id', { type: () => Int }) id: number) {
    return this.readyToSendProductService.remove(id);
  }
}
