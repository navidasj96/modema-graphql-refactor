import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BasicCarpetBrandService } from './basic-carpet-brand.service';
import { CreateBasicCarpetBrandInput } from './dto/create-basic-carpet-brand.input';
import { UpdateBasicCarpetBrandInput } from './dto/update-basic-carpet-brand.input';
import { BasicCarpetBrand } from './domain/basic-carpet-brand';

@Resolver(() => BasicCarpetBrand)
export class BasicCarpetBrandResolver {
  constructor(
    private readonly basicCarpetBrandService: BasicCarpetBrandService,
  ) {}

  @Mutation(() => BasicCarpetBrand)
  createBasicCarpetBrand(
    @Args('createBasicCarpetBrandInput')
    createBasicCarpetBrandInput: CreateBasicCarpetBrandInput,
  ) {
    return this.basicCarpetBrandService.create(createBasicCarpetBrandInput);
  }

  @Query(() => [BasicCarpetBrand], { name: 'basicCarpetBrand' })
  findAll() {
    return this.basicCarpetBrandService.findAll();
  }

  @Query(() => BasicCarpetBrand, { name: 'basicCarpetBrand' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetBrandService.findOne(id);
  }

  @Mutation(() => BasicCarpetBrand)
  updateBasicCarpetBrand(
    @Args('updateBasicCarpetBrandInput')
    updateBasicCarpetBrandInput: UpdateBasicCarpetBrandInput,
  ) {
    return this.basicCarpetBrandService.update(
      updateBasicCarpetBrandInput.id,
      updateBasicCarpetBrandInput,
    );
  }

  @Mutation(() => BasicCarpetBrand)
  removeBasicCarpetBrand(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetBrandService.remove(id);
  }
}
