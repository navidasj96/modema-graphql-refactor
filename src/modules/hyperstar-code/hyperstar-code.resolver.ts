import { Resolver } from '@nestjs/graphql';
import { HyperstarCodeService } from './hyperstar-code.service';
import { HyperstarCode } from './domain/hyperstar-code';

@Resolver(() => HyperstarCode)
export class HyperstarCodeResolver {
  constructor(private readonly hyperstarCodeService: HyperstarCodeService) {}
}
