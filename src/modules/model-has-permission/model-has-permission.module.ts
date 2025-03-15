import { Module } from '@nestjs/common';
import { ModelHasPermissionService } from './model-has-permission.service';
import { ModelHasPermissionResolver } from './model-has-permission.resolver';
import { ModelHasPermission } from '@/modules/model-has-permission/entities/model-has-permission.entity';
import { ModelHasPermission as ModelHasPermissionGarphQL } from '@/modules/model-has-permission/domain/model-has-permission';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateModelHasPermissionInput } from '@/modules/model-has-permission/dto/create-model-has-permission.input';

@Module({
  providers: [ModelHasPermissionResolver, ModelHasPermissionService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ModelHasPermission])],
      resolvers: [
        {
          EntityClass: ModelHasPermission,
          DTOClass: ModelHasPermissionGarphQL,
          CreateDTOClass: CreateModelHasPermissionInput,
        },
      ],
    }),
  ],
})
export class ModelHasPermissionModule {}
