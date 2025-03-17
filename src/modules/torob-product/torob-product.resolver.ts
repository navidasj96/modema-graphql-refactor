import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TorobProductService } from './torob-product.service';
import { CreateTorobProductInput } from './dto/create-torob-product.input';
import { UpdateTorobProductInput } from './dto/update-torob-product.input';
import { TorobProduct } from '@/modules/torob-product/domain/torob-product';

@Resolver(() => TorobProduct)
export class TorobProductResolver {
  constructor(private readonly torobProductService: TorobProductService) {}

  @Mutation(() => TorobProduct)
  createTorobProduct(
    @Args('createTorobProductInput')
    createTorobProductInput: CreateTorobProductInput,
  ) {
    return this.torobProductService.create(createTorobProductInput);
  }

  @Query(() => [TorobProduct], { name: 'torobProduct' })
  findAll() {
    return this.torobProductService.findAll();
  }

  @Query(() => TorobProduct, { name: 'torobProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.torobProductService.findOne(id);
  }

  @Mutation(() => TorobProduct)
  updateTorobProduct(
    @Args('updateTorobProductInput')
    updateTorobProductInput: UpdateTorobProductInput,
  ) {
    return this.torobProductService.update(
      updateTorobProductInput.id,
      updateTorobProductInput,
    );
  }

  @Mutation(() => TorobProduct)
  removeTorobProduct(@Args('id', { type: () => Int }) id: number) {
    return this.torobProductService.remove(id);
  }
}
