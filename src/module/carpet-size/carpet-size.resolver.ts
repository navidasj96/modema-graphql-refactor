import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarpetSizeService } from './carpet-size.service';
import { CreateCarpetSizeInput } from './dto/create-carpet-size.input';
import { UpdateCarpetSizeInput } from './dto/update-carpet-size.input';
import { CarpetSize } from './domain/carpet-size';

@Resolver(() => CarpetSize)
export class CarpetSizeResolver {
  constructor(private readonly carpetSizeService: CarpetSizeService) {}

  @Mutation(() => CarpetSize)
  createCarpetSize(
    @Args('createCarpetSizeInput') createCarpetSizeInput: CreateCarpetSizeInput,
  ) {
    return this.carpetSizeService.create(createCarpetSizeInput);
  }

  @Query(() => [CarpetSize], { name: 'carpetSize' })
  findAll() {
    return this.carpetSizeService.findAll();
  }

  @Query(() => CarpetSize, { name: 'carpetSize' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carpetSizeService.findOne(id);
  }

  @Mutation(() => CarpetSize)
  updateCarpetSize(
    @Args('updateCarpetSizeInput') updateCarpetSizeInput: UpdateCarpetSizeInput,
  ) {
    return this.carpetSizeService.update(
      updateCarpetSizeInput.id,
      updateCarpetSizeInput,
    );
  }

  @Mutation(() => CarpetSize)
  removeCarpetSize(@Args('id', { type: () => Int }) id: number) {
    return this.carpetSizeService.remove(id);
  }
}
