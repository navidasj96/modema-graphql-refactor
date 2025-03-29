import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { RoleHasPermission } from '@/modules/role-has-permission/entities/role-has-permission.entity';
import { RoleHasPermission as RoleHasPermissionGraphQL } from '@/modules/role-has-permission/domain/role-has-permission';
import { CreateRoleHasPermissionInput } from '@/modules/role-has-permission/dto/create-role-has-permission.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([RoleHasPermission])],
      resolvers: [
        {
          EntityClass: RoleHasPermission,
          DTOClass: RoleHasPermissionGraphQL,
          CreateDTOClass: CreateRoleHasPermissionInput,
        },
      ],
    }),
  ],
})
export class RoleHasPermissionModule {}
