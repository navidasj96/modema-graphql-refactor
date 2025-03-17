import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagResolver } from './tag.resolver';
import { Tag } from '@/modules/tag/entities/tag.entity';
import { Tag as TagGraphQL } from '@/modules/tag/domain/tag';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateTagInput } from '@/modules/tag/dto/create-tag.input';

@Module({
  providers: [TagResolver, TagService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Tag])],
      resolvers: [
        {
          EntityClass: Tag,
          DTOClass: TagGraphQL,
          CreateDTOClass: CreateTagInput,
        },
      ],
    }),
  ],
})
export class TagModule {}
