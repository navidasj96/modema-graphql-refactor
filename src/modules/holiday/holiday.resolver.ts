import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HolidayService } from './holiday.service';
import { CreateHolidayInput } from './dto/create-holiday.input';
import { UpdateHolidayInput } from './dto/update-holiday.input';
import { Holiday } from './domain/holiday';

@Resolver(() => Holiday)
export class HolidayResolver {
  constructor(private readonly holidayService: HolidayService) {}

  @Mutation(() => Holiday)
  createHoliday(
    @Args('createHolidayInput') createHolidayInput: CreateHolidayInput,
  ) {
    return this.holidayService.create(createHolidayInput);
  }

  @Query(() => [Holiday], { name: 'holiday' })
  findAll() {
    return this.holidayService.findAll();
  }

  @Query(() => Holiday, { name: 'holiday' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.holidayService.findOne(id);
  }

  @Mutation(() => Holiday)
  updateHoliday(
    @Args('updateHolidayInput') updateHolidayInput: UpdateHolidayInput,
  ) {
    return this.holidayService.update(
      updateHolidayInput.id,
      updateHolidayInput,
    );
  }

  @Mutation(() => Holiday)
  removeHoliday(@Args('id', { type: () => Int }) id: number) {
    return this.holidayService.remove(id);
  }
}
