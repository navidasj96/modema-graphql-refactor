import { Resolver } from '@nestjs/graphql';
import { DiscountSubjectService } from './discount-subject.service';
import { DiscountSubject } from './domain/discount-subject';

@Resolver(() => DiscountSubject)
export class DiscountSubjectResolver {
  constructor(
    private readonly discountSubjectService: DiscountSubjectService,
  ) {}
}
