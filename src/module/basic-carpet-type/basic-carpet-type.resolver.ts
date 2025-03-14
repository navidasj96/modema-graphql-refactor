import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BasicCarpetTypeService } from './basic-carpet-type.service';
import { CreateBasicCarpetTypeInput } from './dto/create-basic-carpet-type.input';
import { UpdateBasicCarpetTypeInput } from './dto/update-basic-carpet-type.input';
import { BasicCarpetType } from './domain/basic-carpet-type';

@Resolver(() => BasicCarpetType)
export class BasicCarpetTypeResolver {
  constructor(
    private readonly basicCarpetTypeService: BasicCarpetTypeService,
  ) {}

  @Mutation(() => BasicCarpetType)
  createBasicCarpetType(
    @Args('createBasicCarpetTypeInput')
    createBasicCarpetTypeInput: CreateBasicCarpetTypeInput,
  ) {
    return this.basicCarpetTypeService.create(createBasicCarpetTypeInput);
  }

  @Query(() => [BasicCarpetType], { name: 'basicCarpetType' })
  findAll() {
    return this.basicCarpetTypeService.findAll();
  }

  @Query(() => BasicCarpetType, { name: 'basicCarpetType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetTypeService.findOne(id);
  }

  @Mutation(() => BasicCarpetType)
  updateBasicCarpetType(
    @Args('updateBasicCarpetTypeInput')
    updateBasicCarpetTypeInput: UpdateBasicCarpetTypeInput,
  ) {
    return this.basicCarpetTypeService.update(
      updateBasicCarpetTypeInput.id,
      updateBasicCarpetTypeInput,
    );
  }

  @Mutation(() => BasicCarpetType)
  removeBasicCarpetType(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetTypeService.remove(id);
  }
}
