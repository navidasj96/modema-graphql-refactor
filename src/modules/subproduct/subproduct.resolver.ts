import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubproductService } from './subproduct.service';
import { CreateSubproductInput } from './dto/create-subproduct.input';
import { UpdateSubproductInput } from './dto/update-subproduct.input';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@Resolver(() => Subproduct)
export class SubproductResolver {
  constructor(private readonly subproductService: SubproductService) {}

  @Mutation(() => Subproduct)
  createSubproduct(
    @Args('createSubproductInput') createSubproductInput: CreateSubproductInput,
  ) {
    return this.subproductService.create(createSubproductInput);
  }

  @Query(() => [Subproduct], { name: 'subproduct' })
  findAll() {
    return this.subproductService.findAll();
  }

  @Query(() => Subproduct, { name: 'subproduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subproductService.findOne(id);
  }

  @Mutation(() => Subproduct)
  updateSubproduct(
    @Args('updateSubproductInput') updateSubproductInput: UpdateSubproductInput,
  ) {
    return this.subproductService.update(
      updateSubproductInput.id,
      updateSubproductInput,
    );
  }

  @Mutation(() => Subproduct)
  removeSubproduct(@Args('id', { type: () => Int }) id: number) {
    return this.subproductService.remove(id);
  }
}
