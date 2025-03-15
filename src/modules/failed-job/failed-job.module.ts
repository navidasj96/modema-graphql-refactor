import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { FailedJob } from './entities/failed-job.entity';
import { FailedJob as FailedJobGraphQL } from './domain/failed-job';
import { CreateFailedJobInput } from './dto/create-failed-job.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([FailedJob])],
      resolvers: [
        {
          EntityClass: FailedJob,
          DTOClass: FailedJobGraphQL,
          CreateDTOClass: CreateFailedJobInput,
        },
      ],
    }),
  ],
})
export class FailedJobModule {}
