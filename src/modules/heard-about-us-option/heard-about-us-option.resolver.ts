import { Resolver } from '@nestjs/graphql';
import { HeardAboutUsOptionService } from './heard-about-us-option.service';
import { HeardAboutUsOption } from './domain/heard-about-us-option';

@Resolver(() => HeardAboutUsOption)
export class HeardAboutUsOptionResolver {
  constructor(
    private readonly heardAboutUsOptionService: HeardAboutUsOptionService,
  ) {}
}
