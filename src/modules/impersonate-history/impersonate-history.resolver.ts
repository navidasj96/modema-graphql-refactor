import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ImpersonateHistoryService } from './impersonate-history.service';
import { CreateImpersonateHistoryInput } from './dto/create-impersonate-history.input';
import { ImpersonateHistory } from '@/modules/impersonate-history/domain/impersonate-history';

@Resolver(() => ImpersonateHistory)
export class ImpersonateHistoryResolver {
  constructor(
    private readonly impersonateHistoryService: ImpersonateHistoryService,
  ) {}

  @Mutation(() => ImpersonateHistory)
  createImpersonateHistory(
    @Args('createImpersonateHistoryInput')
    createImpersonateHistoryInput: CreateImpersonateHistoryInput,
  ) {
    return this.impersonateHistoryService.create(createImpersonateHistoryInput);
  }

  @Query(() => [ImpersonateHistory], { name: 'impersonateHistory' })
  findAll() {
    return this.impersonateHistoryService.findAll();
  }

  @Query(() => ImpersonateHistory, { name: 'impersonateHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.impersonateHistoryService.findOne(id);
  }

  // @Mutation(() => ImpersonateHistory)
  // updateImpersonateHistory(@Args('updateImpersonateHistoryInput') updateImpersonateHistoryInput: UpdateImpersonateHistoryInput) {
  //   return this.impersonateHistoryService.update(updateImpersonateHistoryInput.id, updateImpersonateHistoryInput);
  // }

  @Mutation(() => ImpersonateHistory)
  removeImpersonateHistory(@Args('id', { type: () => Int }) id: number) {
    return this.impersonateHistoryService.remove(id);
  }
}
