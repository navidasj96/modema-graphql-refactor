import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BasicCarpetBorderService } from './basic-carpet-border.service';
import { CreateBasicCarpetBorderInput } from './dto/create-basic-carpet-border.input';
import { UpdateBasicCarpetBorderInput } from './dto/update-basic-carpet-border.input';
import { BasicCarpetBorder } from './domain/basic-carpet-border';

@Resolver(() => BasicCarpetBorder)
export class BasicCarpetBorderResolver {
  constructor(
    private readonly basicCarpetBorderService: BasicCarpetBorderService,
  ) {}

  @Mutation(() => BasicCarpetBorder)
  createBasicCarpetBorder(
    @Args('createBasicCarpetBorderInput')
    createBasicCarpetBorderInput: CreateBasicCarpetBorderInput,
  ) {
    return this.basicCarpetBorderService.create(createBasicCarpetBorderInput);
  }

  @Query(() => [BasicCarpetBorder], { name: 'basicCarpetBorder' })
  findAll() {
    return this.basicCarpetBorderService.findAll();
  }

  @Query(() => BasicCarpetBorder, { name: 'basicCarpetBorder' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetBorderService.findOne(id);
  }

  @Mutation(() => BasicCarpetBorder)
  updateBasicCarpetBorder(
    @Args('updateBasicCarpetBorderInput')
    updateBasicCarpetBorderInput: UpdateBasicCarpetBorderInput,
  ) {
    return this.basicCarpetBorderService.update(
      updateBasicCarpetBorderInput.id,
      updateBasicCarpetBorderInput,
    );
  }

  @Mutation(() => BasicCarpetBorder)
  removeBasicCarpetBorder(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetBorderService.remove(id);
  }
}
