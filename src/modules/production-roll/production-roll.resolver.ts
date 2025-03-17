import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductionRollService } from './production-roll.service';
import { CreateProductionRollInput } from './dto/create-production-roll.input';
import { UpdateProductionRollInput } from './dto/update-production-roll.input';
import { ProductionRoll } from '@/modules/production-roll/domain/production-roll';

@Resolver(() => ProductionRoll)
export class ProductionRollResolver {
  constructor(private readonly productionRollService: ProductionRollService) {}

  @Mutation(() => ProductionRoll)
  createProductionRoll(
    @Args('createProductionRollInput')
    createProductionRollInput: CreateProductionRollInput,
  ) {
    return this.productionRollService.create(createProductionRollInput);
  }

  @Query(() => [ProductionRoll], { name: 'productionRoll' })
  findAll() {
    return this.productionRollService.findAll();
  }

  @Query(() => ProductionRoll, { name: 'productionRoll' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productionRollService.findOne(id);
  }

  @Mutation(() => ProductionRoll)
  updateProductionRoll(
    @Args('updateProductionRollInput')
    updateProductionRollInput: UpdateProductionRollInput,
  ) {
    return this.productionRollService.update(
      updateProductionRollInput.id,
      updateProductionRollInput,
    );
  }

  @Mutation(() => ProductionRoll)
  removeProductionRoll(@Args('id', { type: () => Int }) id: number) {
    return this.productionRollService.remove(id);
  }
}
