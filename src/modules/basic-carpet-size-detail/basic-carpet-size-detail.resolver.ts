import { Resolver } from '@nestjs/graphql';
import { BasicCarpetSizeDetailService } from './basic-carpet-size-detail.service';
import { BasicCarpetSizeDetail } from './domain/basic-carpet-size-detail';

@Resolver(() => BasicCarpetSizeDetail)
export class BasicCarpetSizeDetailResolver {
  constructor(
    private readonly basicCarpetSizeDetailService: BasicCarpetSizeDetailService
  ) {}
}
