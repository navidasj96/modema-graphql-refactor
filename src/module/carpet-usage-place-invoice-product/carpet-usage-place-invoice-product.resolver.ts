import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarpetUsagePlaceInvoiceProductService } from './carpet-usage-place-invoice-product.service';
import { CreateCarpetUsagePlaceInvoiceProductInput } from './dto/create-carpet-usage-place-invoice-product.input';
import { UpdateCarpetUsagePlaceInvoiceProductInput } from './dto/update-carpet-usage-place-invoice-product.input';
import { CarpetUsagePlaceInvoiceProduct } from './domain/carpet-usage-place-invoice-product';

@Resolver(() => CarpetUsagePlaceInvoiceProduct)
export class CarpetUsagePlaceInvoiceProductResolver {
  constructor(
    private readonly carpetUsagePlaceInvoiceProductService: CarpetUsagePlaceInvoiceProductService,
  ) {}

  @Mutation(() => CarpetUsagePlaceInvoiceProduct)
  createCarpetUsagePlaceInvoiceProduct(
    @Args('createCarpetUsagePlaceInvoiceProductInput')
    createCarpetUsagePlaceInvoiceProductInput: CreateCarpetUsagePlaceInvoiceProductInput,
  ) {
    return this.carpetUsagePlaceInvoiceProductService.create(
      createCarpetUsagePlaceInvoiceProductInput,
    );
  }

  @Query(() => [CarpetUsagePlaceInvoiceProduct], {
    name: 'carpetUsagePlaceInvoiceProduct',
  })
  findAll() {
    return this.carpetUsagePlaceInvoiceProductService.findAll();
  }

  @Query(() => CarpetUsagePlaceInvoiceProduct, {
    name: 'carpetUsagePlaceInvoiceProduct',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carpetUsagePlaceInvoiceProductService.findOne(id);
  }

  @Mutation(() => CarpetUsagePlaceInvoiceProduct)
  updateCarpetUsagePlaceInvoiceProduct(
    @Args('updateCarpetUsagePlaceInvoiceProductInput')
    updateCarpetUsagePlaceInvoiceProductInput: UpdateCarpetUsagePlaceInvoiceProductInput,
  ) {
    return this.carpetUsagePlaceInvoiceProductService.update(
      updateCarpetUsagePlaceInvoiceProductInput.id,
      updateCarpetUsagePlaceInvoiceProductInput,
    );
  }

  @Mutation(() => CarpetUsagePlaceInvoiceProduct)
  removeCarpetUsagePlaceInvoiceProduct(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.carpetUsagePlaceInvoiceProductService.remove(id);
  }
}
