import { Module } from '@nestjs/common';
import { ModelVisitService } from './model-visit.service';
import { ModelVisitResolver } from './model-visit.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelVisit } from '@/modules/model-visit/entities/model-visit.entity';
import { ModelVisit as ModelVisitGraphQL } from '@/modules/model-visit/domain/model-visit';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateModelVisitInput } from '@/modules/model-visit/dto/create-model-visit.input';

@Module({
  providers: [ModelVisitResolver, ModelVisitService],
  imports: [
    TypeOrmModule.forFeature([ModelVisit]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ModelVisit])],
      resolvers: [
        {
          EntityClass: ModelVisit,
          DTOClass: ModelVisitGraphQL,
          CreateDTOClass: CreateModelVisitInput,
        },
      ],
    }),
  ],
})
export class ModelVisitModule {}
