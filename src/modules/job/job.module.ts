import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobResolver } from './job.resolver';
import { Job } from '@/modules/job/entities/job.entity';
import { Job as JobGraphQL } from '@/modules/job/domain/job';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateJobInput } from '@/modules/job/dto/create-job.input';

@Module({
  providers: [JobResolver, JobService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Job])],
      resolvers: [
        {
          EntityClass: Job,
          DTOClass: JobGraphQL,
          CreateDTOClass: CreateJobInput,
        },
      ],
    }),
  ],
})
export class JobModule {}
