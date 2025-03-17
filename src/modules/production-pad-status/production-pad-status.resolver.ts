import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductionPadStatusService } from './production-pad-status.service';
import { CreateProductionPadStatusInput } from './dto/create-production-pad-status.input';
import { UpdateProductionPadStatusInput } from './dto/update-production-pad-status.input';
import { ProductionPadStatus } from '@/modules/production-pad-status/domain/production-pad-status';

@Resolver(() => ProductionPadStatus)
export class ProductionPadStatusResolver {
  constructor(
    private readonly productionPadStatusService: ProductionPadStatusService,
  ) {}

  @Mutation(() => ProductionPadStatus)
  createProductionPadStatus(
    @Args('createProductionPadStatusInput')
    createProductionPadStatusInput: CreateProductionPadStatusInput,
  ) {
    return this.productionPadStatusService.create(
      createProductionPadStatusInput,
    );
  }

  @Query(() => [ProductionPadStatus], { name: 'productionPadStatus' })
  findAll() {
    return this.productionPadStatusService.findAll();
  }

  @Query(() => ProductionPadStatus, { name: 'productionPadStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productionPadStatusService.findOne(id);
  }

  @Mutation(() => ProductionPadStatus)
  updateProductionPadStatus(
    @Args('updateProductionPadStatusInput')
    updateProductionPadStatusInput: UpdateProductionPadStatusInput,
  ) {
    return this.productionPadStatusService.update(
      updateProductionPadStatusInput.id,
      updateProductionPadStatusInput,
    );
  }

  @Mutation(() => ProductionPadStatus)
  removeProductionPadStatus(@Args('id', { type: () => Int }) id: number) {
    return this.productionPadStatusService.remove(id);
  }
}
