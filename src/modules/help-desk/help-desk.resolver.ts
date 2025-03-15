import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HelpDeskService } from './help-desk.service';
import { CreateHelpDeskInput } from './dto/create-help-desk.input';
import { HelpDesk } from './domain/help-desk';

@Resolver(() => HelpDesk)
export class HelpDeskResolver {
  constructor(private readonly helpDeskService: HelpDeskService) {}

  @Mutation(() => HelpDesk)
  createHelpDesk(
    @Args('createHelpDeskInput') createHelpDeskInput: CreateHelpDeskInput,
  ) {
    return this.helpDeskService.create(createHelpDeskInput);
  }

  @Query(() => [HelpDesk], { name: 'helpDesk' })
  findAll() {
    return this.helpDeskService.findAll();
  }

  @Query(() => HelpDesk, { name: 'helpDesk' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.helpDeskService.findOne(id);
  }

  // @Mutation(() => HelpDesk)
  // updateHelpDesk(@Args('updateHelpDeskInput') updateHelpDeskInput: UpdateHelpDeskInput) {
  //   return this.helpDeskService.update(updateHelpDeskInput.id, updateHelpDeskInput);
  // }

  @Mutation(() => HelpDesk)
  removeHelpDesk(@Args('id', { type: () => Int }) id: number) {
    return this.helpDeskService.remove(id);
  }
}
