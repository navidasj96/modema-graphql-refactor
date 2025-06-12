import { Resolver } from '@nestjs/graphql';
import { BasicCarpetDesignService } from './basic-carpet-design.service';
import { BasicCarpetDesign } from './domain/basic-carpet-design';

@Resolver(() => BasicCarpetDesign)
export class BasicCarpetDesignResolver {
  constructor(
    private readonly basicCarpetDesignService: BasicCarpetDesignService
  ) {}
}
