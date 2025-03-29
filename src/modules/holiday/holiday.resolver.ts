import { Resolver } from '@nestjs/graphql';
import { HolidayService } from './holiday.service';
import { Holiday } from './domain/holiday';

@Resolver(() => Holiday)
export class HolidayResolver {
  constructor(private readonly holidayService: HolidayService) {}
}
