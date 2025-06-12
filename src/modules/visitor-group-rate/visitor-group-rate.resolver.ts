import { Resolver } from '@nestjs/graphql';
import { VisitorGroupRateService } from './visitor-group-rate.service';
import { VisitorGroupRate } from '@/modules/visitor-group-rate/domain/visitor-group-rate';

@Resolver(() => VisitorGroupRate)
export class VisitorGroupRateResolver {
  constructor(
    private readonly visitorGroupRateService: VisitorGroupRateService
  ) {}
}
