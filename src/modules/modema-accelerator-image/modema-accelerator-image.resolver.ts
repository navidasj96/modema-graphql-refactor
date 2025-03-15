import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ModemaAcceleratorImageService } from './modema-accelerator-image.service';
import { CreateModemaAcceleratorImageInput } from './dto/create-modema-accelerator-image.input';
import { UpdateModemaAcceleratorImageInput } from './dto/update-modema-accelerator-image.input';
import { ModemaAcceleratorImage } from '@/modules/modema-accelerator-image/domain/modema-accelerator-image';

@Resolver(() => ModemaAcceleratorImage)
export class ModemaAcceleratorImageResolver {
  constructor(
    private readonly modemaAcceleratorImageService: ModemaAcceleratorImageService,
  ) {}

  @Mutation(() => ModemaAcceleratorImage)
  createModemaAcceleratorImage(
    @Args('createModemaAcceleratorImageInput')
    createModemaAcceleratorImageInput: CreateModemaAcceleratorImageInput,
  ) {
    return this.modemaAcceleratorImageService.create(
      createModemaAcceleratorImageInput,
    );
  }

  @Query(() => [ModemaAcceleratorImage], { name: 'modemaAcceleratorImage' })
  findAll() {
    return this.modemaAcceleratorImageService.findAll();
  }

  @Query(() => ModemaAcceleratorImage, { name: 'modemaAcceleratorImage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.modemaAcceleratorImageService.findOne(id);
  }

  @Mutation(() => ModemaAcceleratorImage)
  updateModemaAcceleratorImage(
    @Args('updateModemaAcceleratorImageInput')
    updateModemaAcceleratorImageInput: UpdateModemaAcceleratorImageInput,
  ) {
    return this.modemaAcceleratorImageService.update(
      updateModemaAcceleratorImageInput.id,
      updateModemaAcceleratorImageInput,
    );
  }

  @Mutation(() => ModemaAcceleratorImage)
  removeModemaAcceleratorImage(@Args('id', { type: () => Int }) id: number) {
    return this.modemaAcceleratorImageService.remove(id);
  }
}
