import { Module } from '@nestjs/common';
import { Activity } from './entities/activity.entity';
import { Activity as ActivityGraphql } from './domain/activity';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateActivityInput } from './dto/create-activity.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Activity])],
      resolvers: [
        {
          EntityClass: Activity,
          DTOClass: ActivityGraphql,
          CreateDTOClass: CreateActivityInput,
        },
      ],
    }),
  ],
})
export class ActivityModule {}
