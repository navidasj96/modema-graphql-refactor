import { Resolver } from '@nestjs/graphql';
import { RateService } from './rate.service';
import { Rate } from '@/modules/rate/domain/rate';

@Resolver(() => Rate)
export class RateResolver {
  constructor(private readonly rateService: RateService) {}
}
