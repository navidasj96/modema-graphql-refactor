import { Resolver } from '@nestjs/graphql';
import { BasicCarpetColorService } from './basic-carpet-color.service';
import { BasicCarpetColor } from './domain/basic-carpet-color';

@Resolver(() => BasicCarpetColor)
export class BasicCarpetColorResolver {
  constructor(
    private readonly basicCarpetColorService: BasicCarpetColorService
  ) {}
}
