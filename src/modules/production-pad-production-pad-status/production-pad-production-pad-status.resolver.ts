import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductionPadProductionPadStatusService } from './production-pad-production-pad-status.service';
import { CreateProductionPadProductionPadStatusInput } from './dto/create-production-pad-production-pad-status.input';
import { UpdateProductionPadProductionPadStatusInput } from './dto/update-production-pad-production-pad-status.input';
import { ProductionPadProductionPadStatus } from '@/modules/production-pad-production-pad-status/domain/production-pad-production-pad-status';

@Resolver(() => ProductionPadProductionPadStatus)
export class ProductionPadProductionPadStatusResolver {
  constructor(
    private readonly productionPadProductionPadStatusService: ProductionPadProductionPadStatusService,
  ) {}

  @Mutation(() => ProductionPadProductionPadStatus)
  createProductionPadProductionPadStatus(
    @Args('createProductionPadProductionPadStatusInput')
    createProductionPadProductionPadStatusInput: CreateProductionPadProductionPadStatusInput,
  ) {
    return this.productionPadProductionPadStatusService.create(
      createProductionPadProductionPadStatusInput,
    );
  }

  @Query(() => [ProductionPadProductionPadStatus], {
    name: 'productionPadProductionPadStatus',
  })
  findAll() {
    return this.productionPadProductionPadStatusService.findAll();
  }

  @Query(() => ProductionPadProductionPadStatus, {
    name: 'productionPadProductionPadStatus',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productionPadProductionPadStatusService.findOne(id);
  }

  @Mutation(() => ProductionPadProductionPadStatus)
  updateProductionPadProductionPadStatus(
    @Args('updateProductionPadProductionPadStatusInput')
    updateProductionPadProductionPadStatusInput: UpdateProductionPadProductionPadStatusInput,
  ) {
    return this.productionPadProductionPadStatusService.update(
      updateProductionPadProductionPadStatusInput.id,
      updateProductionPadProductionPadStatusInput,
    );
  }

  @Mutation(() => ProductionPadProductionPadStatus)
  removeProductionPadProductionPadStatus(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.productionPadProductionPadStatusService.remove(id);
  }
}
