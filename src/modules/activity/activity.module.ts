import { Module } from '@nestjs/common';
import { Activity } from './entities/activity.entity';
import { Activity as ActivityGraphql } from './domain/activity';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateActivityInput } from './dto/create-activity.input';
import { ActivityResolver } from '@/modules/activity/activity.resolver';
import { ActivityService } from '@/modules/activity/activity.service';
import { UserModule } from '@/modules/user/user.module';

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
    UserModule,
  ],
  providers: [ActivityResolver, ActivityService],
  exports: [ActivityService],
})
export class ActivityModule {}
