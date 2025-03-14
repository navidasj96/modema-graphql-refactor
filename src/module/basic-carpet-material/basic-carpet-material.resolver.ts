import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BasicCarpetMaterialService } from './basic-carpet-material.service';
import { CreateBasicCarpetMaterialInput } from './dto/create-basic-carpet-material.input';
import { UpdateBasicCarpetMaterialInput } from './dto/update-basic-carpet-material.input';
import { BasicCarpetMaterial } from './domain/basic-carpet-material';

@Resolver(() => BasicCarpetMaterial)
export class BasicCarpetMaterialResolver {
  constructor(
    private readonly basicCarpetMaterialService: BasicCarpetMaterialService,
  ) {}

  @Mutation(() => BasicCarpetMaterial)
  createBasicCarpetMaterial(
    @Args('createBasicCarpetMaterialInput')
    createBasicCarpetMaterialInput: CreateBasicCarpetMaterialInput,
  ) {
    return this.basicCarpetMaterialService.create(
      createBasicCarpetMaterialInput,
    );
  }

  @Query(() => [BasicCarpetMaterial], { name: 'basicCarpetMaterial' })
  findAll() {
    return this.basicCarpetMaterialService.findAll();
  }

  @Query(() => BasicCarpetMaterial, { name: 'basicCarpetMaterial' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetMaterialService.findOne(id);
  }

  @Mutation(() => BasicCarpetMaterial)
  updateBasicCarpetMaterial(
    @Args('updateBasicCarpetMaterialInput')
    updateBasicCarpetMaterialInput: UpdateBasicCarpetMaterialInput,
  ) {
    return this.basicCarpetMaterialService.update(
      updateBasicCarpetMaterialInput.id,
      updateBasicCarpetMaterialInput,
    );
  }

  @Mutation(() => BasicCarpetMaterial)
  removeBasicCarpetMaterial(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetMaterialService.remove(id);
  }
}
