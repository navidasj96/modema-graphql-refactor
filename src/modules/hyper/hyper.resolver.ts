import { Resolver } from '@nestjs/graphql';
import { HyperService } from './hyper.service';
import { Hyper } from './domain/hyper';

@Resolver(() => Hyper)
export class HyperResolver {
  constructor(private readonly hyperService: HyperService) {}
}
