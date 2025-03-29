import { Resolver } from '@nestjs/graphql';
import { BasicCarpetBrandService } from './basic-carpet-brand.service';
import { BasicCarpetBrand } from './domain/basic-carpet-brand';

@Resolver(() => BasicCarpetBrand)
export class BasicCarpetBrandResolver {
  constructor(
    private readonly basicCarpetBrandService: BasicCarpetBrandService,
  ) {}
}
