import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BasicCarpetSizeService } from './basic-carpet-size.service';
import { CreateBasicCarpetSizeInput } from './dto/create-basic-carpet-size.input';
import { UpdateBasicCarpetSizeInput } from './dto/update-basic-carpet-size.input';
import { BasicCarpetSize } from './domain/basic-carpet-size';

@Resolver(() => BasicCarpetSize)
export class BasicCarpetSizeResolver {
  constructor(
    private readonly basicCarpetSizeService: BasicCarpetSizeService,
  ) {}

  @Mutation(() => BasicCarpetSize)
  createBasicCarpetSize(
    @Args('createBasicCarpetSizeInput')
    createBasicCarpetSizeInput: CreateBasicCarpetSizeInput,
  ) {
    return this.basicCarpetSizeService.create(createBasicCarpetSizeInput);
  }

  @Query(() => [BasicCarpetSize], { name: 'basicCarpetSize' })
  findAll() {
    return this.basicCarpetSizeService.findAll();
  }

  @Query(() => BasicCarpetSize, { name: 'basicCarpetSize' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetSizeService.findOne(id);
  }

  @Mutation(() => BasicCarpetSize)
  updateBasicCarpetSize(
    @Args('updateBasicCarpetSizeInput')
    updateBasicCarpetSizeInput: UpdateBasicCarpetSizeInput,
  ) {
    return this.basicCarpetSizeService.update(
      updateBasicCarpetSizeInput.id,
      updateBasicCarpetSizeInput,
    );
  }

  @Mutation(() => BasicCarpetSize)
  removeBasicCarpetSize(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetSizeService.remove(id);
  }
}
