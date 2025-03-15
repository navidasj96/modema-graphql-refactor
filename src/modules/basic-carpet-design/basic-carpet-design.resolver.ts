import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BasicCarpetDesignService } from './basic-carpet-design.service';
import { CreateBasicCarpetDesignInput } from './dto/create-basic-carpet-design.input';
import { UpdateBasicCarpetDesignInput } from './dto/update-basic-carpet-design.input';
import { BasicCarpetDesign } from './domain/basic-carpet-design';

@Resolver(() => BasicCarpetDesign)
export class BasicCarpetDesignResolver {
  constructor(
    private readonly basicCarpetDesignService: BasicCarpetDesignService,
  ) {}

  @Mutation(() => BasicCarpetDesign)
  createBasicCarpetDesign(
    @Args('createBasicCarpetDesignInput')
    createBasicCarpetDesignInput: CreateBasicCarpetDesignInput,
  ) {
    return this.basicCarpetDesignService.create(createBasicCarpetDesignInput);
  }

  @Query(() => [BasicCarpetDesign], { name: 'basicCarpetDesign' })
  findAll() {
    return this.basicCarpetDesignService.findAll();
  }

  @Query(() => BasicCarpetDesign, { name: 'basicCarpetDesign' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetDesignService.findOne(id);
  }

  @Mutation(() => BasicCarpetDesign)
  updateBasicCarpetDesign(
    @Args('updateBasicCarpetDesignInput')
    updateBasicCarpetDesignInput: UpdateBasicCarpetDesignInput,
  ) {
    return this.basicCarpetDesignService.update(
      updateBasicCarpetDesignInput.id,
      updateBasicCarpetDesignInput,
    );
  }

  @Mutation(() => BasicCarpetDesign)
  removeBasicCarpetDesign(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetDesignService.remove(id);
  }
}
