import { Resolver } from '@nestjs/graphql';
import { BasicCarpetBorderService } from './basic-carpet-border.service';
import { BasicCarpetBorder } from './domain/basic-carpet-border';

@Resolver(() => BasicCarpetBorder)
export class BasicCarpetBorderResolver {
  constructor(
    private readonly basicCarpetBorderService: BasicCarpetBorderService
  ) {}
}
