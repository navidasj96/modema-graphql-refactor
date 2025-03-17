import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductionReceiptTypeService } from './production-receipt-type.service';
import { CreateProductionReceiptTypeInput } from './dto/create-production-receipt-type.input';
import { UpdateProductionReceiptTypeInput } from './dto/update-production-receipt-type.input';
import { ProductionReceiptType } from '@/modules/production-receipt-type/domain/production-receipt-type';

@Resolver(() => ProductionReceiptType)
export class ProductionReceiptTypeResolver {
  constructor(
    private readonly productionReceiptTypeService: ProductionReceiptTypeService,
  ) {}

  @Mutation(() => ProductionReceiptType)
  createProductionReceiptType(
    @Args('createProductionReceiptTypeInput')
    createProductionReceiptTypeInput: CreateProductionReceiptTypeInput,
  ) {
    return this.productionReceiptTypeService.create(
      createProductionReceiptTypeInput,
    );
  }

  @Query(() => [ProductionReceiptType], { name: 'productionReceiptType' })
  findAll() {
    return this.productionReceiptTypeService.findAll();
  }

  @Query(() => ProductionReceiptType, { name: 'productionReceiptType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productionReceiptTypeService.findOne(id);
  }

  @Mutation(() => ProductionReceiptType)
  updateProductionReceiptType(
    @Args('updateProductionReceiptTypeInput')
    updateProductionReceiptTypeInput: UpdateProductionReceiptTypeInput,
  ) {
    return this.productionReceiptTypeService.update(
      updateProductionReceiptTypeInput.id,
      updateProductionReceiptTypeInput,
    );
  }

  @Mutation(() => ProductionReceiptType)
  removeProductionReceiptType(@Args('id', { type: () => Int }) id: number) {
    return this.productionReceiptTypeService.remove(id);
  }
}
