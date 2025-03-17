import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductionPadService } from './production-pad.service';
import { CreateProductionPadInput } from './dto/create-production-pad.input';
import { UpdateProductionPadInput } from './dto/update-production-pad.input';
import { ProductionPad } from '@/modules/production-pad/domain/production-pad';

@Resolver(() => ProductionPad)
export class ProductionPadResolver {
  constructor(private readonly productionPadService: ProductionPadService) {}

  @Mutation(() => ProductionPad)
  createProductionPad(
    @Args('createProductionPadInput')
    createProductionPadInput: CreateProductionPadInput,
  ) {
    return this.productionPadService.create(createProductionPadInput);
  }

  @Query(() => [ProductionPad], { name: 'productionPad' })
  findAll() {
    return this.productionPadService.findAll();
  }

  @Query(() => ProductionPad, { name: 'productionPad' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productionPadService.findOne(id);
  }

  @Mutation(() => ProductionPad)
  updateProductionPad(
    @Args('updateProductionPadInput')
    updateProductionPadInput: UpdateProductionPadInput,
  ) {
    return this.productionPadService.update(
      updateProductionPadInput.id,
      updateProductionPadInput,
    );
  }

  @Mutation(() => ProductionPad)
  removeProductionPad(@Args('id', { type: () => Int }) id: number) {
    return this.productionPadService.remove(id);
  }
}
