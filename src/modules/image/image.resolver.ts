import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ImageService } from './image.service';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';
import { Image } from '@/modules/image/domain/image';

@Resolver(() => Image)
export class ImageResolver {
  constructor(private readonly imageService: ImageService) {}

  @Mutation(() => Image)
  createImage(@Args('createImageInput') createImageInput: CreateImageInput) {
    return this.imageService.create(createImageInput);
  }

  @Query(() => [Image], { name: 'image' })
  findAll() {
    return this.imageService.findAll();
  }

  @Query(() => Image, { name: 'image' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imageService.findOne(id);
  }

  @Mutation(() => Image)
  updateImage(@Args('updateImageInput') updateImageInput: UpdateImageInput) {
    return this.imageService.update(updateImageInput.id, updateImageInput);
  }

  @Mutation(() => Image)
  removeImage(@Args('id', { type: () => Int }) id: number) {
    return this.imageService.remove(id);
  }
}
