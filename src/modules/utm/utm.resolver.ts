import { Resolver } from '@nestjs/graphql';
import { UtmService } from './utm.service';
import { Utm } from '@/modules/utm/domain/utm';

@Resolver(() => Utm)
export class UtmResolver {
  constructor(private readonly utmService: UtmService) {}
}
