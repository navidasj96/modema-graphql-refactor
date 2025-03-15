import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarpetMaterialService } from './carpet-material.service';
import { CreateCarpetMaterialInput } from './dto/create-carpet-material.input';
import { UpdateCarpetMaterialInput } from './dto/update-carpet-material.input';
import { CarpetMaterial } from './domain/carpet-material';

@Resolver(() => CarpetMaterial)
export class CarpetMaterialResolver {
  constructor(private readonly carpetMaterialService: CarpetMaterialService) {}

  @Mutation(() => CarpetMaterial)
  createCarpetMaterial(
    @Args('createCarpetMaterialInput')
    createCarpetMaterialInput: CreateCarpetMaterialInput,
  ) {
    return this.carpetMaterialService.create(createCarpetMaterialInput);
  }

  @Query(() => [CarpetMaterial], { name: 'carpetMaterial' })
  findAll() {
    return this.carpetMaterialService.findAll();
  }

  @Query(() => CarpetMaterial, { name: 'carpetMaterial' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carpetMaterialService.findOne(id);
  }

  @Mutation(() => CarpetMaterial)
  updateCarpetMaterial(
    @Args('updateCarpetMaterialInput')
    updateCarpetMaterialInput: UpdateCarpetMaterialInput,
  ) {
    return this.carpetMaterialService.update(
      updateCarpetMaterialInput.id,
      updateCarpetMaterialInput,
    );
  }

  @Mutation(() => CarpetMaterial)
  removeCarpetMaterial(@Args('id', { type: () => Int }) id: number) {
    return this.carpetMaterialService.remove(id);
  }
}
