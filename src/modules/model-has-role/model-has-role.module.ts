import { Module } from '@nestjs/common';
import { ModelHasRoleService } from './model-has-role.service';
import { ModelHasRoleResolver } from './model-has-role.resolver';
import { ModelHasRole } from '@/modules/model-has-role/entities/model-has-role.entity';
import { ModelHasRole as ModelHasRoleGraphQL } from '@/modules/model-has-role/domain/model-has-role';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateModelHasRoleInput } from '@/modules/model-has-role/dto/create-model-has-role.input';

@Module({
  providers: [ModelHasRoleResolver, ModelHasRoleService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ModelHasRole])],
      resolvers: [
        {
          EntityClass: ModelHasRole,
          DTOClass: ModelHasRoleGraphQL,
          CreateDTOClass: CreateModelHasRoleInput,
        },
      ],
    }),
  ],
})
export class ModelHasRoleModule {}
