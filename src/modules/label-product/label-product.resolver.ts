import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LabelProductService } from './label-product.service';
import { CreateLabelProductInput } from './dto/create-label-product.input';
import { UpdateLabelProductInput } from './dto/update-label-product.input';
import { LabelProduct } from '@/modules/label-product/domain/label-product';

@Resolver(() => LabelProduct)
export class LabelProductResolver {
  constructor(private readonly labelProductService: LabelProductService) {}

  @Mutation(() => LabelProduct)
  createLabelProduct(
    @Args('createLabelProductInput')
    createLabelProductInput: CreateLabelProductInput,
  ) {
    return this.labelProductService.create(createLabelProductInput);
  }

  @Query(() => [LabelProduct], { name: 'labelProduct' })
  findAll() {
    return this.labelProductService.findAll();
  }

  @Query(() => LabelProduct, { name: 'labelProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.labelProductService.findOne(id);
  }

  @Mutation(() => LabelProduct)
  updateLabelProduct(
    @Args('updateLabelProductInput')
    updateLabelProductInput: UpdateLabelProductInput,
  ) {
    return this.labelProductService.update(
      updateLabelProductInput.id,
      updateLabelProductInput,
    );
  }

  @Mutation(() => LabelProduct)
  removeLabelProduct(@Args('id', { type: () => Int }) id: number) {
    return this.labelProductService.remove(id);
  }
}
