import { Context, Query, Resolver } from '@nestjs/graphql';
import { SubproductService } from './subproduct.service';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@Resolver(() => Subproduct)
export class SubproductResolver {
  constructor(private readonly subproductService: SubproductService) {}

  @Query(() => Boolean)
  findOneSubproduct(@Context('req') req: any) {
    // req.session.test = 'hello';
    // console.log('Request context:', req);
    return true;
  }
}
