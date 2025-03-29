import { Resolver } from '@nestjs/graphql';
import { BorderService } from './border.service';
import { Border } from './domain/border';

@Resolver(() => Border)
export class BorderResolver {
  constructor(private readonly borderService: BorderService) {}
}
