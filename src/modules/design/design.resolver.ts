import { Resolver } from '@nestjs/graphql';
import { DesignService } from './design.service';
import { Design } from './domain/design';

@Resolver(() => Design)
export class DesignResolver {
  constructor(private readonly designService: DesignService) {}
}
