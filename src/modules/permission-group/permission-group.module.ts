import { Module } from '@nestjs/common';
import { PermissionGroupService } from './permission-group.service';
import { PermissionGroupResolver } from './permission-group.resolver';
import { PermissionGroup } from '@/modules/permission-group/entities/permission-group.entity';
import { PermissionGroup as PermissionGroupGraphQL } from '@/modules/permission-group/domain/permission-group';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePermissionGroupInput } from '@/modules/permission-group/dto/create-permission-group.input';

@Module({
  providers: [PermissionGroupResolver, PermissionGroupService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PermissionGroup])],
      resolvers: [
        {
          EntityClass: PermissionGroup,
          DTOClass: PermissionGroupGraphQL,
          CreateDTOClass: CreatePermissionGroupInput,
        },
      ],
    }),
  ],
})
export class PermissionGroupModule {}
