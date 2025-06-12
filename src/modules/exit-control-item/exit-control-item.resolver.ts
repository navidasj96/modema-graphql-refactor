import { Resolver } from '@nestjs/graphql';
import { ExitControlItemService } from './exit-control-item.service';
import { ExitControlItem } from './domain/exit-control-item';

@Resolver(() => ExitControlItem)
export class ExitControlItemResolver {
  constructor(
    private readonly exitControlItemService: ExitControlItemService
  ) {}
}
