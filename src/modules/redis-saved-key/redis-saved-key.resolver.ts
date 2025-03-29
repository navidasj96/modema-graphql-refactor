import { Resolver } from '@nestjs/graphql';
import { RedisSavedKeyService } from './redis-saved-key.service';
import { RedisSavedKey } from '@/modules/redis-saved-key/domain/redis-saved-key';

@Resolver(() => RedisSavedKey)
export class RedisSavedKeyResolver {
  constructor(private readonly redisSavedKeyService: RedisSavedKeyService) {}
}
