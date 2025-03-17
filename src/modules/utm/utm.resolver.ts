import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UtmService } from './utm.service';
import { CreateUtmInput } from './dto/create-utm.input';
import { UpdateUtmInput } from './dto/update-utm.input';
import { Utm } from '@/modules/utm/domain/utm';

@Resolver(() => Utm)
export class UtmResolver {
  constructor(private readonly utmService: UtmService) {}

  @Mutation(() => Utm)
  createUtm(@Args('createUtmInput') createUtmInput: CreateUtmInput) {
    return this.utmService.create(createUtmInput);
  }

  @Query(() => [Utm], { name: 'utm' })
  findAll() {
    return this.utmService.findAll();
  }

  @Query(() => Utm, { name: 'utm' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.utmService.findOne(id);
  }

  @Mutation(() => Utm)
  updateUtm(@Args('updateUtmInput') updateUtmInput: UpdateUtmInput) {
    return this.utmService.update(updateUtmInput.id, updateUtmInput);
  }

  @Mutation(() => Utm)
  removeUtm(@Args('id', { type: () => Int }) id: number) {
    return this.utmService.remove(id);
  }
}
