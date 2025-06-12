import { Resolver } from '@nestjs/graphql';
import { BasicCarpetTypeService } from './basic-carpet-type.service';
import { BasicCarpetType } from './domain/basic-carpet-type';

@Resolver(() => BasicCarpetType)
export class BasicCarpetTypeResolver {
  constructor(
    private readonly basicCarpetTypeService: BasicCarpetTypeService
  ) {}
}
