import { Resolver } from '@nestjs/graphql';
import { BasicCarpetMaterialService } from './basic-carpet-material.service';
import { BasicCarpetMaterial } from './domain/basic-carpet-material';

@Resolver(() => BasicCarpetMaterial)
export class BasicCarpetMaterialResolver {
  constructor(
    private readonly basicCarpetMaterialService: BasicCarpetMaterialService
  ) {}
}
