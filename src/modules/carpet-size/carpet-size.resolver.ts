import { Resolver } from '@nestjs/graphql';
import { CarpetSizeService } from './carpet-size.service';
import { CarpetSize } from './domain/carpet-size';

@Resolver(() => CarpetSize)
export class CarpetSizeResolver {
  constructor(private readonly carpetSizeService: CarpetSizeService) {}
}
