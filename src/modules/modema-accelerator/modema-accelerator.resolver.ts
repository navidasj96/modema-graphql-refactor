import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ModemaAcceleratorService } from './modema-accelerator.service';
import { CreateModemaAcceleratorInput } from './dto/create-modema-accelerator.input';
import { UpdateModemaAcceleratorInput } from './dto/update-modema-accelerator.input';
import { ModemaAccelerator } from '@/modules/modema-accelerator/domain/modema-accelerator';

@Resolver(() => ModemaAccelerator)
export class ModemaAcceleratorResolver {
  constructor(
    private readonly modemaAcceleratorService: ModemaAcceleratorService,
  ) {}

  @Mutation(() => ModemaAccelerator)
  createModemaAccelerator(
    @Args('createModemaAcceleratorInput')
    createModemaAcceleratorInput: CreateModemaAcceleratorInput,
  ) {
    return this.modemaAcceleratorService.create(createModemaAcceleratorInput);
  }

  @Query(() => [ModemaAccelerator], { name: 'modemaAccelerator' })
  findAll() {
    return this.modemaAcceleratorService.findAll();
  }

  @Query(() => ModemaAccelerator, { name: 'modemaAccelerator' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.modemaAcceleratorService.findOne(id);
  }

  @Mutation(() => ModemaAccelerator)
  updateModemaAccelerator(
    @Args('updateModemaAcceleratorInput')
    updateModemaAcceleratorInput: UpdateModemaAcceleratorInput,
  ) {
    return this.modemaAcceleratorService.update(
      updateModemaAcceleratorInput.id,
      updateModemaAcceleratorInput,
    );
  }

  @Mutation(() => ModemaAccelerator)
  removeModemaAccelerator(@Args('id', { type: () => Int }) id: number) {
    return this.modemaAcceleratorService.remove(id);
  }
}
