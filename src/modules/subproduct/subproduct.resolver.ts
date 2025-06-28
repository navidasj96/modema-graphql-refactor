import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { SubproductService } from './subproduct.service';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { ChangeColorBasedOnProductOutput } from '@/modules/subproduct/dto/change-color-based-on-product.output';

@Resolver(() => Subproduct)
export class SubproductResolver {
  constructor(private readonly subproductService: SubproductService) {}

  @Query(() => Boolean)
  findOneSubproduct(@Context('req') req: any) {
    // req.session.test = 'hello';
    // console.log('Request context:', req);
    return true;
  }

  @Query(() => [ChangeColorBasedOnProductOutput])
  async changeColorBasedOnProduct(
    @Args('productId', { type: () => Number }) productId: number
  ) {
    return await this.subproductService.changeColorBasedOnProduct(productId);
  }
}
