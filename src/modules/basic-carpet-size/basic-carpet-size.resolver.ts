import { Resolver } from '@nestjs/graphql';
import { BasicCarpetSizeService } from './basic-carpet-size.service';
import { BasicCarpetSize } from './domain/basic-carpet-size';

@Resolver(() => BasicCarpetSize)
export class BasicCarpetSizeResolver {
  constructor(
    private readonly basicCarpetSizeService: BasicCarpetSizeService,
  ) {}
}
