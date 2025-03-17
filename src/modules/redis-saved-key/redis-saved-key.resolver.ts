import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RedisSavedKeyService } from './redis-saved-key.service';
import { CreateRedisSavedKeyInput } from './dto/create-redis-saved-key.input';
import { RedisSavedKey } from '@/modules/redis-saved-key/domain/redis-saved-key';

@Resolver(() => RedisSavedKey)
export class RedisSavedKeyResolver {
  constructor(private readonly redisSavedKeyService: RedisSavedKeyService) {}

  @Mutation(() => RedisSavedKey)
  createRedisSavedKey(
    @Args('createRedisSavedKeyInput')
    createRedisSavedKeyInput: CreateRedisSavedKeyInput,
  ) {
    return this.redisSavedKeyService.create(createRedisSavedKeyInput);
  }

  @Query(() => [RedisSavedKey], { name: 'redisSavedKey' })
  findAll() {
    return this.redisSavedKeyService.findAll();
  }

  @Query(() => RedisSavedKey, { name: 'redisSavedKey' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.redisSavedKeyService.findOne(id);
  }

  // @Mutation(() => RedisSavedKey)
  // updateRedisSavedKey(@Args('updateRedisSavedKeyInput') updateRedisSavedKeyInput: UpdateRedisSavedKeyInput) {
  //   return this.redisSavedKeyService.update(updateRedisSavedKeyInput.id, updateRedisSavedKeyInput);
  // }

  @Mutation(() => RedisSavedKey)
  removeRedisSavedKey(@Args('id', { type: () => Int }) id: number) {
    return this.redisSavedKeyService.remove(id);
  }
}
