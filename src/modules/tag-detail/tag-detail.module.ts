import { Module } from '@nestjs/common';
import { TagDetailService } from './tag-detail.service';
import { TagDetailResolver } from './tag-detail.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { TagDetail } from '@/modules/tag-detail/entities/tag-detail.entity';
import { TagDetail as graphqlTagDetail } from '@/modules/tag-detail/domain/tag-detail';
import { CreateTagDetailInput } from './dto/create-tag-detail.input';

@Module({
  providers: [TagDetailResolver, TagDetailService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TagDetail])],
      resolvers: [
        {
          EntityClass: TagDetail,
          DTOClass: graphqlTagDetail,
          CreateDTOClass: CreateTagDetailInput,
        },
      ],
    }),
  ],
})
export class TagDetailModule {}
