import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BasicCarpetColorService } from './basic-carpet-color.service';
import { CreateBasicCarpetColorInput } from './dto/create-basic-carpet-color.input';
import { UpdateBasicCarpetColorInput } from './dto/update-basic-carpet-color.input';
import { BasicCarpetColor } from './domain/basic-carpet-color';

@Resolver(() => BasicCarpetColor)
export class BasicCarpetColorResolver {
  constructor(
    private readonly basicCarpetColorService: BasicCarpetColorService,
  ) {}

  @Mutation(() => BasicCarpetColor)
  createBasicCarpetColor(
    @Args('createBasicCarpetColorInput')
    createBasicCarpetColorInput: CreateBasicCarpetColorInput,
  ) {
    return this.basicCarpetColorService.create(createBasicCarpetColorInput);
  }

  @Query(() => [BasicCarpetColor], { name: 'basicCarpetColor' })
  findAll() {
    return this.basicCarpetColorService.findAll();
  }

  @Query(() => BasicCarpetColor, { name: 'basicCarpetColor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetColorService.findOne(id);
  }

  @Mutation(() => BasicCarpetColor)
  updateBasicCarpetColor(
    @Args('updateBasicCarpetColorInput')
    updateBasicCarpetColorInput: UpdateBasicCarpetColorInput,
  ) {
    return this.basicCarpetColorService.update(
      updateBasicCarpetColorInput.id,
      updateBasicCarpetColorInput,
    );
  }

  @Mutation(() => BasicCarpetColor)
  removeBasicCarpetColor(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetColorService.remove(id);
  }
}
