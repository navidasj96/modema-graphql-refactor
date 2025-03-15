import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductColorSaleService } from './product-color-sale.service';
import { CreateProductColorSaleInput } from './dto/create-product-color-sale.input';
import { UpdateProductColorSaleInput } from './dto/update-product-color-sale.input';
import { ProductColorSale } from '@/modules/product-color-sale/domain/product-color-sale';

@Resolver(() => ProductColorSale)
export class ProductColorSaleResolver {
  constructor(
    private readonly productColorSaleService: ProductColorSaleService,
  ) {}

  @Mutation(() => ProductColorSale)
  createProductColorSale(
    @Args('createProductColorSaleInput')
    createProductColorSaleInput: CreateProductColorSaleInput,
  ) {
    return this.productColorSaleService.create(createProductColorSaleInput);
  }

  @Query(() => [ProductColorSale], { name: 'productColorSale' })
  findAll() {
    return this.productColorSaleService.findAll();
  }

  @Query(() => ProductColorSale, { name: 'productColorSale' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productColorSaleService.findOne(id);
  }

  @Mutation(() => ProductColorSale)
  updateProductColorSale(
    @Args('updateProductColorSaleInput')
    updateProductColorSaleInput: UpdateProductColorSaleInput,
  ) {
    return this.productColorSaleService.update(
      updateProductColorSaleInput.id,
      updateProductColorSaleInput,
    );
  }

  @Mutation(() => ProductColorSale)
  removeProductColorSale(@Args('id', { type: () => Int }) id: number) {
    return this.productColorSaleService.remove(id);
  }
}
