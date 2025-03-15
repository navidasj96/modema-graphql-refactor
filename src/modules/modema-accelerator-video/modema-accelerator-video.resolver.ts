import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ModemaAcceleratorVideoService } from './modema-accelerator-video.service';
import { CreateModemaAcceleratorVideoInput } from './dto/create-modema-accelerator-video.input';
import { UpdateModemaAcceleratorVideoInput } from './dto/update-modema-accelerator-video.input';
import { ModemaAcceleratorVideo } from '@/modules/modema-accelerator-video/domain/modema-accelerator-video';

@Resolver(() => ModemaAcceleratorVideo)
export class ModemaAcceleratorVideoResolver {
  constructor(
    private readonly modemaAcceleratorVideoService: ModemaAcceleratorVideoService,
  ) {}

  @Mutation(() => ModemaAcceleratorVideo)
  createModemaAcceleratorVideo(
    @Args('createModemaAcceleratorVideoInput')
    createModemaAcceleratorVideoInput: CreateModemaAcceleratorVideoInput,
  ) {
    return this.modemaAcceleratorVideoService.create(
      createModemaAcceleratorVideoInput,
    );
  }

  @Query(() => [ModemaAcceleratorVideo], { name: 'modemaAcceleratorVideo' })
  findAll() {
    return this.modemaAcceleratorVideoService.findAll();
  }

  @Query(() => ModemaAcceleratorVideo, { name: 'modemaAcceleratorVideo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.modemaAcceleratorVideoService.findOne(id);
  }

  @Mutation(() => ModemaAcceleratorVideo)
  updateModemaAcceleratorVideo(
    @Args('updateModemaAcceleratorVideoInput')
    updateModemaAcceleratorVideoInput: UpdateModemaAcceleratorVideoInput,
  ) {
    return this.modemaAcceleratorVideoService.update(
      updateModemaAcceleratorVideoInput.id,
      updateModemaAcceleratorVideoInput,
    );
  }

  @Mutation(() => ModemaAcceleratorVideo)
  removeModemaAcceleratorVideo(@Args('id', { type: () => Int }) id: number) {
    return this.modemaAcceleratorVideoService.remove(id);
  }
}
