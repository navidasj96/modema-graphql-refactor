import { Module } from '@nestjs/common';
import { UserHasRoleService } from './user-has-role.service';
import { UserHasRoleResolver } from './user-has-role.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { UserHasRole } from '@/modules/user-has-role/entities/user-has-role.entity';
import { UserHasRole as UserHasRoleGraphQL } from '@/modules/user-has-role/domain/user-has-role';
import { CreateUserHasRoleInput } from '@/modules/user-has-role/dto/create-user-has-role.input';

@Module({
  providers: [UserHasRoleResolver, UserHasRoleService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([UserHasRole])],
      resolvers: [
        {
          EntityClass: UserHasRole,
          DTOClass: UserHasRoleGraphQL,
          CreateDTOClass: CreateUserHasRoleInput,
        },
      ],
    }),
  ],
})
export class UserHasRoleModule {}
