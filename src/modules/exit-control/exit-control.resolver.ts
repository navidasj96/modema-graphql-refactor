import { Resolver } from '@nestjs/graphql';
import { ExitControlService } from './exit-control.service';
import { ExitControl } from './domain/exit-control';

@Resolver(() => ExitControl)
export class ExitControlResolver {
  constructor(private readonly exitControlService: ExitControlService) {}
}
