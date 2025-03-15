import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NeedsPhotographySubproductService } from './needs-photography-subproduct.service';
import { CreateNeedsPhotographySubproductInput } from './dto/create-needs-photography-subproduct.input';
import { UpdateNeedsPhotographySubproductInput } from './dto/update-needs-photography-subproduct.input';
import { NeedsPhotographySubproduct } from '@/modules/needs-photography-subproduct/domain/needs-photography-subproduct';

@Resolver(() => NeedsPhotographySubproduct)
export class NeedsPhotographySubproductResolver {
  constructor(
    private readonly needsPhotographySubproductService: NeedsPhotographySubproductService,
  ) {}

  @Mutation(() => NeedsPhotographySubproduct)
  createNeedsPhotographySubproduct(
    @Args('createNeedsPhotographySubproductInput')
    createNeedsPhotographySubproductInput: CreateNeedsPhotographySubproductInput,
  ) {
    return this.needsPhotographySubproductService.create(
      createNeedsPhotographySubproductInput,
    );
  }

  @Query(() => [NeedsPhotographySubproduct], {
    name: 'needsPhotographySubproduct',
  })
  findAll() {
    return this.needsPhotographySubproductService.findAll();
  }

  @Query(() => NeedsPhotographySubproduct, {
    name: 'needsPhotographySubproduct',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.needsPhotographySubproductService.findOne(id);
  }

  @Mutation(() => NeedsPhotographySubproduct)
  updateNeedsPhotographySubproduct(
    @Args('updateNeedsPhotographySubproductInput')
    updateNeedsPhotographySubproductInput: UpdateNeedsPhotographySubproductInput,
  ) {
    return this.needsPhotographySubproductService.update(
      updateNeedsPhotographySubproductInput.id,
      updateNeedsPhotographySubproductInput,
    );
  }

  @Mutation(() => NeedsPhotographySubproduct)
  removeNeedsPhotographySubproduct(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.needsPhotographySubproductService.remove(id);
  }
}
