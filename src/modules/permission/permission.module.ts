import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionResolver } from './permission.resolver';
import { Permission } from '@/modules/permission/entities/permission.entity';
import { Permission as PermissionGraphQL } from '@/modules/permission/domain/permission';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePermissionInput } from '@/modules/permission/dto/create-permission.input';

@Module({
  providers: [PermissionResolver, PermissionService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Permission])],
      resolvers: [
        {
          EntityClass: Permission,
          DTOClass: PermissionGraphQL,
          CreateDTOClass: CreatePermissionInput,
        },
      ],
    }),
  ],
  exports: [PermissionService],
})
export class PermissionModule {}
