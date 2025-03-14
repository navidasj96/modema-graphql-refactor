import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BasicCarpetDesignerService } from './basic-carpet-designer.service';
import { CreateBasicCarpetDesignerInput } from './dto/create-basic-carpet-designer.input';
import { UpdateBasicCarpetDesignerInput } from './dto/update-basic-carpet-designer.input';
import { BasicCarpetDesigner } from './domain/basic-carpet-designer';

@Resolver(() => BasicCarpetDesigner)
export class BasicCarpetDesignerResolver {
  constructor(
    private readonly basicCarpetDesignerService: BasicCarpetDesignerService,
  ) {}

  @Mutation(() => BasicCarpetDesigner)
  createBasicCarpetDesigner(
    @Args('createBasicCarpetDesignerInput')
    createBasicCarpetDesignerInput: CreateBasicCarpetDesignerInput,
  ) {
    return this.basicCarpetDesignerService.create(
      createBasicCarpetDesignerInput,
    );
  }

  @Query(() => [BasicCarpetDesigner], { name: 'basicCarpetDesigner' })
  findAll() {
    return this.basicCarpetDesignerService.findAll();
  }

  @Query(() => BasicCarpetDesigner, { name: 'basicCarpetDesigner' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetDesignerService.findOne(id);
  }

  @Mutation(() => BasicCarpetDesigner)
  updateBasicCarpetDesigner(
    @Args('updateBasicCarpetDesignerInput')
    updateBasicCarpetDesignerInput: UpdateBasicCarpetDesignerInput,
  ) {
    return this.basicCarpetDesignerService.update(
      updateBasicCarpetDesignerInput.id,
      updateBasicCarpetDesignerInput,
    );
  }

  @Mutation(() => BasicCarpetDesigner)
  removeBasicCarpetDesigner(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetDesignerService.remove(id);
  }
}
