import { Resolver } from '@nestjs/graphql';
import { CarpetShapeService } from './carpet-shape.service';
import { CarpetShape } from './domain/carpet-shape';

@Resolver(() => CarpetShape)
export class CarpetShapeResolver {
  constructor(private readonly carpetShapeService: CarpetShapeService) {}
}
