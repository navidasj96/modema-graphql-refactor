import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { UserHasPermission } from '@/modules/user-has-permission/entities/user-has-role.entity';
import { UserHasPermission as UserHasPermissionGraphQL } from '@/modules/user-has-permission/domain/user-has-role';
import { CreateUserHasPermissionInput } from '@/modules/user-has-permission/dto/create-user-has-permission.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([UserHasPermission])],
      resolvers: [
        {
          EntityClass: UserHasPermission,
          DTOClass: UserHasPermissionGraphQL,
          CreateDTOClass: CreateUserHasPermissionInput,
        },
      ],
    }),
  ],
})
export class UserHasPermissionModule {}
