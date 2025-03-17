import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnRequestItemVideoService } from './return-request-item-video.service';
import { CreateReturnRequestItemVideoInput } from './dto/create-return-request-item-video.input';
import { UpdateReturnRequestItemVideoInput } from './dto/update-return-request-item-video.input';
import { ReturnRequestItemVideo } from '@/modules/return-request-item-video/domain/return-request-item-video';

@Resolver(() => ReturnRequestItemVideo)
export class ReturnRequestItemVideoResolver {
  constructor(
    private readonly returnRequestItemVideoService: ReturnRequestItemVideoService,
  ) {}

  @Mutation(() => ReturnRequestItemVideo)
  createReturnRequestItemVideo(
    @Args('createReturnRequestItemVideoInput')
    createReturnRequestItemVideoInput: CreateReturnRequestItemVideoInput,
  ) {
    return this.returnRequestItemVideoService.create(
      createReturnRequestItemVideoInput,
    );
  }

  @Query(() => [ReturnRequestItemVideo], { name: 'returnRequestItemVideo' })
  findAll() {
    return this.returnRequestItemVideoService.findAll();
  }

  @Query(() => ReturnRequestItemVideo, { name: 'returnRequestItemVideo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestItemVideoService.findOne(id);
  }

  @Mutation(() => ReturnRequestItemVideo)
  updateReturnRequestItemVideo(
    @Args('updateReturnRequestItemVideoInput')
    updateReturnRequestItemVideoInput: UpdateReturnRequestItemVideoInput,
  ) {
    return this.returnRequestItemVideoService.update(
      updateReturnRequestItemVideoInput.id,
      updateReturnRequestItemVideoInput,
    );
  }

  @Mutation(() => ReturnRequestItemVideo)
  removeReturnRequestItemVideo(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestItemVideoService.remove(id);
  }
}
