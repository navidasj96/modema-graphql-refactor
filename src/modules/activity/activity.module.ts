import { Module } from '@nestjs/common';
import { Activity } from './entities/activity.entity';
import { Activity as ActivityGraphql } from './domain/activity';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateActivityInput } from './dto/create-activity.input';
import { ActivityResolver } from '@/modules/activity/activity.resolver';
import { ActivityService } from '@/modules/activity/activity.service';
import { User } from '@/modules/user/entities/user.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Activity, User])],
      resolvers: [
        {
          EntityClass: Activity,
          DTOClass: ActivityGraphql,
          CreateDTOClass: CreateActivityInput,
        },
      ],
    }),
  ],
  providers: [ActivityResolver, ActivityService],
})
export class ActivityModule {}
