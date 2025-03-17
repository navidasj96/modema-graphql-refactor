import { Module } from '@nestjs/common';
import { RedisSavedKeyService } from './redis-saved-key.service';
import { RedisSavedKeyResolver } from './redis-saved-key.resolver';
import { RedisSavedKey } from '@/modules/redis-saved-key/entities/redis-saved-key.entity';
import { RedisSavedKey as RedisSavedKeyGraphQL } from '@/modules/redis-saved-key/domain/redis-saved-key';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateRedisSavedKeyInput } from '@/modules/redis-saved-key/dto/create-redis-saved-key.input';

@Module({
  providers: [RedisSavedKeyResolver, RedisSavedKeyService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([RedisSavedKey])],
      resolvers: [
        {
          EntityClass: RedisSavedKey,
          DTOClass: RedisSavedKeyGraphQL,
          CreateDTOClass: CreateRedisSavedKeyInput,
        },
      ],
    }),
  ],
})
export class RedisSavedKeyModule {}
