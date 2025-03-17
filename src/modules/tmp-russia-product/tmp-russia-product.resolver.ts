import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TmpRussiaProductService } from './tmp-russia-product.service';
import { CreateTmpRussiaProductInput } from './dto/create-tmp-russia-product.input';
import { UpdateTmpRussiaProductInput } from './dto/update-tmp-russia-product.input';
import { TmpRussiaProduct } from '@/modules/tmp-russia-product/domain/tmp-russia-product';

@Resolver(() => TmpRussiaProduct)
export class TmpRussiaProductResolver {
  constructor(
    private readonly tmpRussiaProductService: TmpRussiaProductService,
  ) {}

  @Mutation(() => TmpRussiaProduct)
  createTmpRussiaProduct(
    @Args('createTmpRussiaProductInput')
    createTmpRussiaProductInput: CreateTmpRussiaProductInput,
  ) {
    return this.tmpRussiaProductService.create(createTmpRussiaProductInput);
  }

  @Query(() => [TmpRussiaProduct], { name: 'tmpRussiaProduct' })
  findAll() {
    return this.tmpRussiaProductService.findAll();
  }

  @Query(() => TmpRussiaProduct, { name: 'tmpRussiaProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tmpRussiaProductService.findOne(id);
  }

  @Mutation(() => TmpRussiaProduct)
  updateTmpRussiaProduct(
    @Args('updateTmpRussiaProductInput')
    updateTmpRussiaProductInput: UpdateTmpRussiaProductInput,
  ) {
    return this.tmpRussiaProductService.update(
      updateTmpRussiaProductInput.id,
      updateTmpRussiaProductInput,
    );
  }

  @Mutation(() => TmpRussiaProduct)
  removeTmpRussiaProduct(@Args('id', { type: () => Int }) id: number) {
    return this.tmpRussiaProductService.remove(id);
  }
}
