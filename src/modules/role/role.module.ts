import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '@/modules/role/entities/role.entity';
import { Role as RoleGraphQL } from '@/modules/role/domain/role';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateRoleInput } from '@/modules/role/dto/create-role.input';

@Module({
  providers: [RoleResolver, RoleService],
  imports: [
    TypeOrmModule.forFeature([Role]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Role])],
      resolvers: [
        {
          EntityClass: Role,
          DTOClass: RoleGraphQL,
          CreateDTOClass: CreateRoleInput,
        },
      ],
    }),
  ],
})
export class RoleModule {}
