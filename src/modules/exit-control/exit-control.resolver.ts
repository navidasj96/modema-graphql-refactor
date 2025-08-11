import { Resolver } from '@nestjs/graphql';
import { ExitControl } from './domain/exit-control';
import { ExitControlService } from './exit-control.service';

@Resolver(() => ExitControl)
export class ExitControlResolver {
  constructor(private readonly exitControlService: ExitControlService) {}
}
