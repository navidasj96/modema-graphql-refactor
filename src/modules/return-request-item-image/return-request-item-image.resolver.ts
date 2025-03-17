import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnRequestItemImageService } from './return-request-item-image.service';
import { CreateReturnRequestItemImageInput } from './dto/create-return-request-item-image.input';
import { UpdateReturnRequestItemImageInput } from './dto/update-return-request-item-image.input';
import { ReturnRequestItemImage } from '@/modules/return-request-item-image/domain/return-request-item-image';

@Resolver(() => ReturnRequestItemImage)
export class ReturnRequestItemImageResolver {
  constructor(
    private readonly returnRequestItemImageService: ReturnRequestItemImageService,
  ) {}

  @Mutation(() => ReturnRequestItemImage)
  createReturnRequestItemImage(
    @Args('createReturnRequestItemImageInput')
    createReturnRequestItemImageInput: CreateReturnRequestItemImageInput,
  ) {
    return this.returnRequestItemImageService.create(
      createReturnRequestItemImageInput,
    );
  }

  @Query(() => [ReturnRequestItemImage], { name: 'returnRequestItemImage' })
  findAll() {
    return this.returnRequestItemImageService.findAll();
  }

  @Query(() => ReturnRequestItemImage, { name: 'returnRequestItemImage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestItemImageService.findOne(id);
  }

  @Mutation(() => ReturnRequestItemImage)
  updateReturnRequestItemImage(
    @Args('updateReturnRequestItemImageInput')
    updateReturnRequestItemImageInput: UpdateReturnRequestItemImageInput,
  ) {
    return this.returnRequestItemImageService.update(
      updateReturnRequestItemImageInput.id,
      updateReturnRequestItemImageInput,
    );
  }

  @Mutation(() => ReturnRequestItemImage)
  removeReturnRequestItemImage(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestItemImageService.remove(id);
  }
}
