import { Resolver } from '@nestjs/graphql';
import { StateService } from './state.service';
import { State } from '@/modules/state/domain/state';

@Resolver(() => State)
export class StateResolver {
  constructor(private readonly stateService: StateService) {}
}
