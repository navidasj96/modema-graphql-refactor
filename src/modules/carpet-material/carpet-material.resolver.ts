import { Resolver } from '@nestjs/graphql';
import { CarpetMaterialService } from './carpet-material.service';
import { CarpetMaterial } from './domain/carpet-material';

@Resolver(() => CarpetMaterial)
export class CarpetMaterialResolver {
  constructor(private readonly carpetMaterialService: CarpetMaterialService) {}
}
