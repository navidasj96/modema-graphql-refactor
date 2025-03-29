import { Resolver } from '@nestjs/graphql';
import { SubproductService } from './subproduct.service';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@Resolver(() => Subproduct)
export class SubproductResolver {
  constructor(private readonly subproductService: SubproductService) {}
}
